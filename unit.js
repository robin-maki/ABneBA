const gun = require('./weapon/gun');
const Bullet = require('./bullet');

const SPEED = 2;
const TURN_SPEED = 0.1;

class Unit {
    constructor(position) {
        this.hp = 100;
        this.position = position; // vector {x,y}
        this.direction = 0; // angle(radian), -PI < direction <= PI
        this.size = 10; // radius
        this.weapon = gun;
        this.bullet = gun.magazine;
        this.cooltime = 0;
    }
    goStraight(speed=SPEED) { // execute once per frame
        if (speed > SPEED) {
            speed = SPEED;
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
        let b = new Bullet(this.position, this.angle, this.weapon);
        
    }
    getDamage() {

    }
    throwItem() {

    }
    useItem() {

    }
}