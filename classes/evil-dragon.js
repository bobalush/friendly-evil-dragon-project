// Your code here

const Dragon = require('./dragon');

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings, nemesis) {
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    // dontInviteThemOverForDinner() -- this method should console.log out each of the Evil
    // Dragon's evil doings separately, in the format ${name} wil ${evilDoing}
    dontInviteThemOverForDinner() {
        this.evilDoings.forEach(evilDoing => {
            console.log(`${this.name} will ${evilDoing}`);
        })
    }

    // burnsNemesis() - this method should return a string using name and nemesis property values formatted as ${name}
    // destroys ${nemesis} with fire! WHOOOSH!!!
    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }

}

module.exports = EvilDragon;
