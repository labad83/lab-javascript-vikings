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
        return this.health -= damage;
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
        return Soldier.receiveDamage;
    }
}

// Saxon
class Saxon {}

// War
class War {}