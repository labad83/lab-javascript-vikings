// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;

    }
    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }


    battleCry() {
        return 'Odin Owns You All!';
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);

    }

    receiveDamage(damage) {
        this.health -= damage;
        // if (this.health > 0) {
        //     return `${this.name} has received ${damage} points of damage`;
        // }
        // return `${this.name} has died in act of combat`; ESTA PARTE NO ME SALE Y ES IGUAL QUE LA ANTERIOR

    }


}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    // addViking(viking) {
    //     this.vikingArmy.push();

    // addSaxon(saxon){
    //     this.saxonArmy.push();
    //   }

    // }
}