const Unit = require('./unit');
const Flash = require('./item/flash')
const Grenade = require('./item/grenade')
const Smoke = require('./item/smoke')

const FPS = 15;
const TEAM_POP = 20;
const MAP_SIZE = 5000;

let frame;
let units = [];
let bullets = [];
let itemsOwned = {"RED":{"FLASH":0,"GRENADE":0,"SMOKE":0}, "BLUE":{"FLASH":0,"GRENADE":0,"SMOKE":0}};
let itemsOnField = [];
let itemsThrown = [];
let count = [0, 0]; /// left: red / right: blue
let mapSize = 5000; // radius

setInterval(() => {
    frame++;
    mapSize--;
    units.forEach((unit, index) => {
        // scan units out of map
        if( Math.sqrt(Math.pow(unit.position.x,2) + Math.pow(unit.position.y,2)) - unit.SIZE >= mapsize ) {
            unit.hp -= (Math.floor(frame/900) + 1) * 1;
        }
        // kill units
        if (unit.hp <= 0) {
            switch (unit.team){
                case "RED":
                    count[0]--;
                    break;
                case "BLUE":
                    count[1]--;
                    break;
            }
            units.splice(index, 1);
        }
        // make units blind
        if (unit.blindTime > 0) {
            unit.blindTime--;
        }
    });
    bullets.forEach((bullet, index) => {
        // move bullet
        bullet.position.x += bullet.SPEED*Math.cos(bullet.angle);
        bullet.position.y += bullet.SPEED*Math.sin(bullet.angle);
        bullet.LIFE--;
        // scan hit units
        units.forEach((unit) => {
            if (Math.pow(unit.position.x - bullet.position.x,2)+Math.pow(unit.position.y - bullet.position.y,2) <= 100)
                unit.hp -= bullet.damage;
        });
        // disappeared bullets
        if (bullet.LIFE = 0)
            bullets.splice(index, 1);
    });
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
            }, "RED");
            units.push(u);
        }
        for(let i = 0; i < TEAM_POP; i++) {
            const rad = Math.random() * Math.PI * 2;
            let u = new Unit({
                x: Math.cos(rad) * Math.random() * mapSize,
                y: Math.sin(rad) * Math.random() * mapSize
            }, "BLUE");
            units.push(u);
        }
        itemsOwned = {"RED":{"FLASH":3,"GRENADE":3,"SMOKE":3}, "BLUE":{"FLASH":3,"GRENADE":3,"SMOKE":3}};
    },
    boundUnits(position, radius) {  // position: vector {x,y} / radius
        let result = [];
        const distance = radius + Unit.SIZE;
        units.forEach((unit) => {
            if( Math.pow((unit.position.x-position.x,2)) + Math.pow((unit.position.y-position.y),2) <= Math.pow(distance,2) ) {
                result.push(unit);
            }
        });
        return result;
    }
}