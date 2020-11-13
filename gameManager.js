const Unit = require('./unit');

const FPS = 15;
const TEAM_POP = 20;
const MAP_SIZE = 5000;

let frame;
let units = [];
let bullets = [];
let count = [0, 0];
let mapSize = 5000;

setInterval(() => {
    frame++;
    mapSize--;
}, 1000 / FPS);

module.exports = {
    FPS,
    getFrame() {
        return frame;
    },
    init() {
        count = [TEAM_POP, TEAM_POP];
        for(let i = 0; i < TEAM_POP; i++) {
            const rad = Math.random() * Math.PI * 2;
            let u = new Unit({
                x: Math.cos(rad) * Math.random() * mapSize,
                y: Math.sin(rad) * Math.random() * mapSize
            });
            units.push(u);
        }
    },
    boundUnits(center, radius) {
        let result = [];
        const distance = radius + Unit.SIZE;
        units.forEach((unit) => {
            if(/* 대충 unit.position이랑 center가 distance보다 가까우면 */) {
                result.push(unit);
            }
        });
        return result;
    }
}