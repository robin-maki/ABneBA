/*
맵크기: 
*/
// 상위: 시야 제공
const SPEED = 2;
const TURN_SPEED = 0.1;

class Unit {
    constructor(position) {
        this.hp = 100;
        this.position = position; // vector {x,y}
        this.direction = 0; // angle(radian), -PI < direction <= PI
        this.size = 10; // radius
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

    }
    getDamage() {

    }
    throwItem() {

    }
    useItem() {

    }
}