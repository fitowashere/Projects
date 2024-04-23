document.addEventListener('DOMContentLoaded', function() {
    const activateBtn = document.getElementById('activate');
    const keys = document.querySelectorAll('.key');
    const synth = new Tone.Synth().toDestination();
    const activeKeys = new Set();
    

    // Activate AudioContext on user interaction
    activateBtn.addEventListener('click', async () => {
        if (Tone.context.state !== 'running') {
            await Tone.start();
            console.log('AudioContext (re)activated');
        }
        document.getElementById('songUpload').style.display = 'block';
        activateBtn.style.display = 'none';
    });

    // Keyboard events for playing notes
    document.addEventListener('keydown', event => {
        console.log("Key down event:", event.code);
        const note = keyMap[event.code];
        if (note && !activeKeys.has(event.code)) {
            event.preventDefault();
            activeKeys.add(event.code);
            playNote(note, event.code);
        }
    });
        
    document.addEventListener('keyup', event => {
        console.log("Key up event:", event.code);
        const note = keyMap[event.code];
        if (note && activeKeys.has(event.code)) {
            event.preventDefault();
            activeKeys.delete(event.code);
            releaseNote(note, event.code);
        }
    });

    // Extend key event listeners to change key appearance on press/release
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

    function playNote(note, source) {
        const keyElement = document.querySelector(`.key[data-key="${note}"]`);
        if (keyElement) {
            keyElement.classList.add('active');
            console.log("Playing note:", note, "from source:", source);
            synth.triggerAttack(note, Tone.now());
        }
    }
    
    function releaseNote(note, source) {
        try {
            const currentTime = Tone.now();
            if (currentTime == null) {
                console.error("Current time is null, cannot release note:", note);
                return;
            }
            const keyElement = document.querySelector(`.key[data-key="${note}"]`);
            if (keyElement) {
                keyElement.classList.remove('active');
                console.log("Releasing note:", note, "from source:", source, "at", currentTime);
                synth.triggerRelease(note, currentTime);
            }
        } catch (error) {
            console.error("Failed to release note:", note, "Error:", error);
        }
    }

    const keyMap = {
        'KeyA': 'C4', 'KeyW': 'C#4', 'KeyS': 'D4', 'KeyE': 'D#4', 'KeyD': 'E4', 'KeyF': 'F4',
        'KeyT': 'F#4', 'KeyG': 'G4', 'KeyY': 'G#4', 'KeyH': 'A4', 'KeyU': 'A#4', 'KeyJ': 'B4', 
        'KeyK': 'C5', 'KeyO': 'C#5', 'KeyL': 'D5', 'KeyP': 'D#5', 'Semicolon': 'E5', 'KeyZ': 'F5', 
        'KeyX': 'F#5', 'KeyC': 'G5', 'KeyV': 'G#5', 'KeyB': 'A5', 'KeyN': 'A#5', 'KeyM': 'B5'
    };

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

    function safeCancelAndHoldAtTime(audioParam, time) {
        if (time == null || typeof time !== 'number') {
            console.error("Invalid time argument for cancelAndHoldAtTime: time is null or not a number", time);
            return;
        }
        console.log("Proceeding with safeCancelAndHoldAtTime at time:", time);
        audioParam.cancelAndHoldAtTime(time);
    }
    
    // Example of using a valid audio parameter from synth
    const audioParam = synth.volume;  // Assuming you want to control the volume
    const calculatedTime = Tone.now() + 1; // Assuming you want to hold the value 1 second from now
    
    console.log("Calculated Time for safeCancelAndHoldAtTime:", calculatedTime);
    safeCancelAndHoldAtTime(audioParam, calculatedTime);
});
