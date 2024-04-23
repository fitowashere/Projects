import MidiParser from 'midi-parser-js';

document.addEventListener('DOMContentLoaded', async function() {
    const activateBtn = document.getElementById('activate');
    const uploadElement = document.getElementById('songUpload');
    const audioContext = new AudioContext();

    activateBtn.addEventListener('click', async () => {
        if (audioContext.state === 'suspended') {
            await audioContext.resume();
            console.log('AudioContext activated');
            uploadElement.style.display = "block";
            activateBtn.style.display = "none";
        }
    });

    uploadElement.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            processMIDIFile(file, audioContext);
        }
    });
});

function processMIDIFile(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const fileContents = e.target.result;
        try {
            const midi = MidiParser.parse(new Uint8Array(fileContents));
            console.log('Parsed MIDI data:', midi);
            handleMIDIData(midi);
        } catch (error) {
            console.error('Error parsing MIDI file:', error);
        }
    };
    reader.readAsArrayBuffer(file);
}

function handleMIDIData(midi) {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now() + 0.5; // Delay start slightly
    midi.track.forEach(track => {
        track.event.forEach(event => {
            if (event.type === 'noteOn') {
                synth.triggerAttack(event.noteName, now + event.deltaTime / 1000, event.velocity / 127);
            } else if (event.type === 'noteOff') {
                synth.triggerRelease(event.noteName, now + event.deltaTime / 1000);
            }
        });
    });
}
