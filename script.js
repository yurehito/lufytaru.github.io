const audio = document.getElementById('audio');
const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 100;

const audioContext = new AudioContext();
const analyser = audioContext.createAnalyser();
const source = audioContext.createMediaElementSource(audio);
source.connect(analyser);
analyser.connect(audioContext.destination);

function visualize() {
    requestAnimationFrame(visualize);
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    data.forEach((value, i) => {
        ctx.fillStyle = '#ff9bec';
        ctx.fillRect(i * 5, canvas.height - value, 4, value);
    });
}

audio.onplay = () => {
    audioContext.resume();
    visualize();
};
