const gameManager = require('./gameManager');

const SPEED = 10;
const LIFE = 10;

class Bullet {
    constructor(position, angle, damage = 20) {
        this.position = position;
        this.angle = angle;
        this.damage = damage;
        this.life = LIFE;
        gameManager.addBullet(this);    //todo
    }
}

Bullet.LIFE = LIFE;
Bullet.SPEED = SPEED;

module.exports = Bullet;