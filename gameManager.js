const FPS = 15;

let frame;

setInterval(() => {
    frame++;
}, 1000 / FPS);

module.exports = {
    FPS,
    getFrame() {
        return frame;
    }
}