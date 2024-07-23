const Dragon = require('./dragon.js');

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings = [], nemesis) {
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis;
    }

    dontInviteThemOverForDinner() {
        this.evilDoings.forEach(el => {
            console.log(`${this.name} will ${el}`)
        });
    }

    burnsNemesis() {
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
    }
}

try {
    module.exports = EvilDragon;
  } catch {
    module.exports = null;
  }
  