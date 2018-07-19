class Envido {
    constructor(carta1, carta2, carta3) {
        this.carta1 = carta1;
        this.carta2 = carta2;
        this.carta3 = carta3;
    }

    sumatoria() {
        var sumatoria1 = 0;
        var sumatoria2 = 0;
        var sumatoria3 = 0;
        if(typeof(this.carta1) == 'number') {
            return this.carta1;
        }
        if(this.carta1.palo() == this.carta2.palo()) {
            sumatoria1 = this.carta1.numeroEnvido() + this.carta2.numeroEnvido();
        }
        if(this.carta2.palo() == this.carta3.palo()) {
            sumatoria2 = this.carta2.numeroEnvido() + this.carta3.numeroEnvido();
        }
        if(this.carta1.palo() == this.carta3.palo()) {
            sumatoria3 = this.carta1.numeroEnvido() + this.carta3.numeroEnvido();
        }
        if(sumatoria1 == 0 && sumatoria2 == 0 && sumatoria3 == 0) {
            return Math.max(this.carta1.numeroEnvido(), this.carta2.numeroEnvido(), this.carta3.numeroEnvido());
        }
        return Math.max(sumatoria1, sumatoria2, sumatoria3) + 20;
    }

    compite(otroEnvido) {
        if (this.sumatoria() > otroEnvido.sumatoria()) {
            return this;
        }
        return otroEnvido;
    }

    equals(otroEnvido) {
        return otroEnvido instanceof Envido;
    }
}

module.exports = Envido