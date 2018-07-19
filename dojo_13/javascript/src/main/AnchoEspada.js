class AnchoEspada {
    compite(otraCarta) {
        return this;
    }

    equals(otraCarta) {
        return otraCarta instanceof AnchoEspada;
    }

    palo() {
        return 'espada';
    }

    numeroEnvido() {
        return 1;
    }
}

module.exports = AnchoEspada