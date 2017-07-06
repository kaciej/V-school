class Wizard {
    constructor(name, hp, spells) {
        this.name = name;
        this.hp = hp;
        this.spells = spells;
    }
    attack(wizard, spell){
        
    }
}

class Spell {
    constructor(name, damage){
        this.name = name;
        this.damage = damage;
    }
}

let catGut = new Spell("lumos", 27);
let smores = new Spell("Smores", 88);
let spellie = new Spell("Spellie", 66);
let poof = new Spell("Poof", 35);

let smitty = new Wizard ("Smitty", 100, [minions, catGut]);

let dofinDumb = new Wizard("Dorfin Dumb", 100, [spellie, poof]);

console.log(smitty);
console.log(dofinDumb);