const gameManager = require('./gameManager');

const SPEED = 100;
const SIZE = 1;

class Bullet {
    constructor(position, angle, damage = 20) {
        this.position = position;
        this.angle = angle;
        this.damage = damage;
        this.size = SIZE;
        this.speed = SPEED;
        gameManager.addBullet(this);
    }
}