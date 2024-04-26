document.addEventListener('DOMContentLoaded', function() {
    const activateBtn = document.getElementById('activate');
    const keys = document.querySelectorAll('.key');
    const volumeControl = document.querySelector('input[type="range"]');
    
    // Use PolySynth with the Synth as the voice
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const gainNode = new Tone.Gain().toDestination();
    synth.connect(gainNode);

    // Initialize volume from the slider
    gainNode.gain.value = volumeControl.value;

    // Handle volume changes
    volumeControl.addEventListener('input', function() {
        gainNode.gain.value = this.value;
    });

    // Ensure the AudioContext is activated on user interaction
    activateBtn.addEventListener('click', async () => {
        if (Tone.context.state !== 'running') {
            await Tone.start();
            console.log('AudioContext activated');
        }
        document.getElementById('songUpload').style.display = 'block';
        activateBtn.style.display = 'none';
    });

    // Event listeners for keyboard interactions
    document.addEventListener('keydown', event => {
        const note = keyMap[event.code];
        if (note && !activeKeys.has(event.code)) {
            event.preventDefault();
            activeKeys.add(event.code);
            playNote(note, event.code);
        }
    });
        
    document.addEventListener('keyup', event => {
        const note = keyMap[event.code];
        if (note && activeKeys.has(event.code)) {
            event.preventDefault();
            activeKeys.delete(event.code);
            releaseNote(note, event.code);
        }
    });

    // Extend key event listeners to change key appearance on press/release for mouse interactions
    keys.forEach(key => {
        key.addEventListener('mousedown', event => {
            const note = key.getAttribute('data-key');
            if (!key.dataset.active) {
                key.dataset.active = 'true';
                playNote(note, key.dataset.key);
            }
        });

        key.addEventListener('mouseup', event => {
            const note = key.getAttribute('data-key');
            if (key.dataset.active) {
                delete key.dataset.active;
                releaseNote(note, key.dataset.key);
            }
        });
    });

    // Play a note
    function playNote(note, source) {
        const currentTime = Tone.now();
        const keyElement = document.querySelector(`.key[data-key="${note}"]`);
        if (keyElement) {
            keyElement.classList.add('active');
            console.log("Playing note:", note, "from source", source, "at", currentTime);
            synth.triggerAttack(note, currentTime);
        }
    }

    // Release a note
    function releaseNote(note, source) {
        const currentTime = Tone.now();
        const keyElement = document.querySelector(`.key[data-key="${note}"]`);
        if (keyElement) {
            keyElement.classList.remove('active');
            console.log("Releasing note:", note, "from source", source, "at", currentTime);
            synth.triggerRelease(note, currentTime);
        }
    }

    // Key mapping for the keyboard
    const keyMap = {
        'KeyA': 'C4', 'KeyW': 'C#4', 'KeyS': 'D4', 'KeyE': 'D#4', 'KeyD': 'E4', 'KeyF': 'F4',
        'KeyT': 'F#4', 'KeyG': 'G4', 'KeyY': 'G#4', 'KeyH': 'A4', 'KeyU': 'A#4', 'KeyJ': 'B4', 
        'KeyK': 'C5', 'KeyO': 'C#5', 'KeyL': 'D5', 'KeyP': 'D#5', 'Semicolon': 'E5', 'KeyZ': 'F5', 
        'KeyX': 'F#5', 'KeyC': 'G5', 'KeyV': 'G#5', 'KeyB': 'A5', 'KeyN': 'A#5', 'KeyM': 'B5'
    };

    const activeKeys = new Set(); // Set to track active keys

    const toggle = document.getElementById('keyToggle');
    toggle.addEventListener('change', function() {
        keys.forEach(key => {
            const span = key.querySelector('span');
            if (this.checked) {
                span.textContent = key.getAttribute('data-key');
            } else {
                span.textContent = key.getAttribute('data-alt-key');
            }
        });
    });
});
