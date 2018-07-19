class DoceBastos {
    compite(otraCarta) {
        return otraCarta;
    }

    equals(otraCarta) {
        return otraCarta instanceof DoceBastos;
    }

    palo() {
        return 'basto';
    }
    
    numeroEnvido() {
        return 0;
    }
}

module.exports = DoceBastos;