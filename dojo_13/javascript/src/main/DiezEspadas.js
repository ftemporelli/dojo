class DiezEspadas {
    compite(otraCarta) {
        return this;
    }

    equals(otraCarta) {
        return otraCarta instanceof DiezEspadas;
    }

    palo() {
        return 'espada';
    }

    numeroEnvido() {
        return 0;
    }
}

module.exports = DiezEspadas