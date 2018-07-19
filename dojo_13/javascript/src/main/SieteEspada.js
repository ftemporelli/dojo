class SieteEspada {

    compite(otraCarta) {
        return otraCarta;
    }

    equals(otraCarta) {
        return otraCarta instanceof SieteEspada;
    }

    palo() {
        return 'espada';
    }

    numeroEnvido() {
        return 7;
    }
}

module.exports = SieteEspada;