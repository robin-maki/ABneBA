const Unit = require('./unit');

const FPS = 15;
const TEAM_POP = 20;

let frame;
let units = [];
let bullets = [];
let count = [0, 0];

setInterval(() => {
    frame++;
}, 1000 / FPS);

module.exports = {
    FPS,
    getFrame() {
        return frame;
    },
    init() {
        count = [TEAM_POP, TEAM_POP];
        for(let i = 0; i < TEAM_POP; i++) {
            let u = new Unit({x: 0, y: 0});
            // TODO 유닛 적당히 뿌려주기
            
        }
    },
    boundUnit(center, radius) {
    
    }
}