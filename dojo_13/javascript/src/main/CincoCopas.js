class CincoCopas {
    compite(otraCarta) {
        return otraCarta;
    }

    equals(otraCarta) {
        return otraCarta instanceof CincoCopas;
    }

    palo() {
        return 'copas';
    }

    numeroEnvido() {
        return 5;
    }
}

module.exports = CincoCopas