// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
    }

}


// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health = this.health - damage;
        let damageDone = this.health;
       
        if(damageDone === 0) return `${this.name} has died in act of combat`;
        else  return `${this.name} has received ${damage} points of damage`;
    }

    battleCry(){
        return 'Odin Owns You All!';
    }

}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    };

    receiveDamage(damage){
        this.health = this.health - damage;
        if(this.health > 0)return `A Saxon has received ${damage} points of damage`;
        else return `A Saxon has died in combat`;
    }

}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){

        let saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

        let deadSaxon = saxon.receiveDamage(viking.strength);

        if(saxon.health <= 0){
            this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
            return deadSaxon;
        }
        
    }

    saxonAttack(){
        let saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];

        let deadViking = viking.receiveDamage(saxon.strength);

        if(viking.health <= 0){
            this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);
            return deadViking;
        }else{
            return deadViking;
        }
    }

    showStatus(){

        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!';
        }else if(this.vikingArmy.length === 0){
            return 'Saxons have fought for their lives and survive another day...';
        }else{
            return 'Vikings and Saxons are still in the thick of battle.';
        }

    }

}
