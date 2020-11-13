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