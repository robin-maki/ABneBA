const manager = require('./gameManager');

class Grenade extends Thrown {
    explode() {
        units = manager.boundUnits(this.position, 50)
        units.foreach((unit) =>{
            let distance = Math.sqrt( Math.pow((this.position.x-unit.position.x),2)+Math.pow((this.position.y-unit.position.y),2) );
            let damage = 100*(50-distance)/50;
            unit.hp -= damage;
        });
    }
}