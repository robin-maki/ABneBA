const gun = require('./weapon/gun');
const Bullet = require('./bullet');

const SPEED = 2;
const TURN_SPEED = 0.1;
const SIZE = 10;

class Unit {
    constructor(position, team) {
        this.hp = 100;
        this.position = position; // vector {x,y}
        this.direction = Math.random() * Math.PI * 2 - Math.PI; // angle(radian), -PI < direction <= PI
        this.size = SIZE; // radius
        this.weapon = gun;
        this.bullet = gun.magazine;
        this.cooltime = 0;
        this.blindTime = 0;
        this.isShown = true;
        this.team = team;
    }
    goStraight(speed=SPEED) { // execute once per frame
        if (speed > SPEED) {
            speed = SPEED;
        }
        else if (speed < 0) {
            speed = 0;
        }
        this.position.x += Math.cos(this.direction)*speed;
        this.position.y += Math.sin(this.direction)*speed;
    }
    turn(speed) { // execute once per frame
        if(speed < -TURN_SPEED) {
            speed = -TURN_SPEED;
        }
        else if(speed > TURN_SPEED) {
            speed = TURN_SPEED;
        }
        this.direction += speed;
        if(this.direction <= -Math.PI) {
            this.direction += 2 * Math.PI;
        }
        else if(this.direction > Math.PI) {
            this.direction -= 2 * Math.PI;
        }
    }
    shoot() {
        if (bullet != 0){
            let b = new Bullet(this.position, this.angle, this.weapon.damage);
            this.bullet--;
            this.cooltime = this.weapon.cooltime;   
        }
        else
            this.reload();
    }
    reload() {
        this.cooltime = 45;
    }
    throwItem(item, distance) { // throw forward
        switch (item){
            case "flash":
                break;
            case "smoke":
                break;
            case "grenade":
                break;
        }
    }
}

Unit.SIZE = SIZE;

module.exports = Unit;