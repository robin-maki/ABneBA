/*
맵크기: 
*/
// 상위: 시야 제공
class unit {
    constructor(position) {
        this.hp = 100;
        this.position = position; // vector {x,y}
        this.direction = 0; // angle(radian)
        this.size = 50; // radius
    }
    goStraight(speed=10) { // execute once per frame
        if (speed > 10) {
            speed = 10;
        }
        this.position.x += Math.cos(this.direction)*speed;
        this.position.y += Math.sin(this.direction)*speed;
    }
    /*
    turn(speed=0.1) { // execute once per frame
        if (speed > 0.1) {
            speed = 0.1;
        }
        this.direction += angle;
    }
    */
    changeDirection(postDir) {  // order
        
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