const manager = require('./gameManager');

class Flash extends Thrown {
    explode() {
        units = manager.boundUnits(this.position, 50)
        units.foreach((unit) =>{
            unit.blindTime = 45;
        });
    }
}