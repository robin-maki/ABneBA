/*
맵크기: 
*/
// 상위: 시야 제공


class Unit {
    constructor(position) {
        this.hp = 100;
        this.position = position; // vector {x,y}
        this.direction = 0; // angle(radian), -PI < direction <= PI
        this.size = 50; // radius
    }
    goStraight(speed=10) { // execute once per frame
        if (speed > 10) {
            speed = 10;
        }
        this.position.x += Math.cos(this.direction)*speed;
        this.position.y += Math.sin(this.direction)*speed;
    }
    turn(speed) { // execute once per frame
        if(speed < -0.1) {
            speed = -0.1;
        }
        else if(speed > 0.1) {
            speed = 0.1;
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