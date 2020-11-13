class Thrown {
    constructor(position, direction, speed) {
        this.position = position;
        this.direction = direction;
        this.speed = speed; // per frame
        this.life = 30;
    }
    fly() {     // per frame
        if (life == 0)
            this.explode();
        this.position.x += Math.cos(this.direction)*this.speed;
        this.position.y += Math.sin(this.direction)*this.speed;
        life--;
    }
    explode() {}
}