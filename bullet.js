const gameManager = require('./gameManager');

class Bullet {
    constructor(position, angle, damage = 20) {
        this.position = position;
        this.angle = angle;
        this.damage = damage;
        gameManager.addBullet(this);
    }
}