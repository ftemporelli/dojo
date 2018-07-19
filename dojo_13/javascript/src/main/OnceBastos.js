class OnceBastos {
    compite(otraCarta) {
        return otraCarta;
    }

    equals(otraCarta) {
        return otraCarta instanceof OnceBastos;
    }

    palo() {
        return 'basto';
    }
    
    numeroEnvido() {
        return 0;
    }
}

module.exports = OnceBastos;