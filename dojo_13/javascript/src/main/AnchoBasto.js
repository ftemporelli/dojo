const AnchoEspada = require('../main/AnchoEspada');

class AnchoBasto {
    compite(otraCarta) {
        if (otraCarta.equals(new AnchoEspada())) {
            return otraCarta;
        }
        return this;
    }

    equals(otraCarta) {
        return otraCarta instanceof AnchoBasto;
    }

    palo() {
        return 'basto';
    }

    numeroEnvido() {
        return 1;
    }
}

module.exports = AnchoBasto