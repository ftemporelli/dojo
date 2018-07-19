class CuatroCopas {
    compite(otraCarta) {
        return otraCarta;
    }

    equals(otraCarta) {
        return otraCarta instanceof CuatroCopas
    }

    palo() {
        return 'copas';
    }

    numeroEnvido() {
        return 4;
    }
}

module.exports = CuatroCopas