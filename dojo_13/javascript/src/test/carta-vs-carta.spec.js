var should = require('should');

const AnchoEspada = require('../main/AnchoEspada');
const AnchoBasto = require('../main/AnchoBasto');
const SieteEspada = require('../main/SieteEspada');
const DiezEspadas = require('../main/DiezEspadas');
const CincoCopas = require('../main/CincoCopas');
const DoceBastos = require('../main/DoceBastos');
const OnceBastos = require('../main/OnceBastos');
const Envido = require('../main/Envido');


describe('Truco', () => {

    it('test_ancho_de_espada_mata_siete_espada', () => {

        const carta = new AnchoEspada().compite(new SieteEspada())

        should(carta.equals(new AnchoEspada())).be.eql(true)
    });    

    it('test_ancho_de_basto_mata_siete_espada', () => {

        const carta = new AnchoBasto().compite(new SieteEspada())

        should(carta.equals(new AnchoBasto())).be.eql(true)
    });
    
    it('test_ancho_de_basto_pierde_ancho_espada', () => {

        const carta = new AnchoBasto().compite(new AnchoEspada())

        should(carta.equals(new AnchoEspada())).be.eql(true)
    });    

    it('test_siete_espada_pierde_con_ancho_espada', () => {

        const carta = new SieteEspada().compite(new AnchoEspada())

        should(carta.equals(new AnchoEspada())).be.eql(true)    
    });

    it('test_siete_espada_pierde_con_ancho_basto', () => {

        const carta = new SieteEspada().compite(new AnchoBasto())

        should(carta.equals(new AnchoBasto())).be.eql(true)    
    });

    it('test_ancho_espada_mata_ancho_de_basto', () => {

        const carta = new AnchoEspada().compite(new AnchoBasto())

        should(carta.equals(new AnchoEspada())).be.eql(true)    
    }); 

    it('test_envido_triada_jugador_uno_veintiocho_pierde_contra_triada_jugador_dos_treintaidos', () => {
        
        const ManoGanadora = new Envido(28).compite(new Envido(32))

        should(ManoGanadora.equals(new Envido(32))).be.eql(true)    
    });

    it('test_envido_triada_jugador_uno_treintaitres_gana_contra_triada_jugador_dos_treintaidos', () => {

        const ManoGanadora = new Envido(33).compite(new Envido(32))

        should(ManoGanadora.equals(new Envido(33))).be.eql(true)    
    });

    it('dadas_dos_triadas_conformadas_por_espada1_espada7_copa5_y_espada1_espada10_copa5_ante_un_envido_debe_ganar_la_primer_triada_de_cartas', () => {

        const ManoGanadora = new Envido(new AnchoEspada(), new SieteEspada(), new CincoCopas()).compite(new Envido(new AnchoEspada(), new DiezEspadas(), new CincoCopas()))

        should(ManoGanadora.equals(new Envido(new AnchoEspada(), new SieteEspada(), new CincoCopas()))).be.eql(true)    
    });

    it('dadas_dos_triadas_conformadas_por_basto11_basto12_copa5_y_espada1_espada10_copa5_ante_un_envido_debe_ganar_la_segunda_triada_de_cartas', () => {

        const ManoGanadora = new Envido(new OnceBastos(), new DoceBastos(), new CincoCopas()).compite(new Envido(new AnchoEspada(), new DiezEspadas(), new CincoCopas()))

        should(ManoGanadora.equals(new Envido(new OnceBastos(), new DoceBastos(), new CincoCopas()))).be.eql(true)    
    });
    it('dadas_dos_triadas_conformadas_por_espada7_basto12_copa5_y_basto1_espada10_copa5_ante_un_envido_debe_ganar_la_primera_triada_de_cartas', () => {

        const ManoGanadora = new Envido(new SieteEspada(), new DoceBastos(), new CincoCopas()).compite(new Envido(new AnchoBasto(), new DiezEspadas(), new CincoCopas()))

        should(ManoGanadora.equals(new Envido(new SieteEspada(), new DoceBastos(), new CincoCopas()))).be.eql(true)    
    });
    it('dadas_dos_triadas_conformadas_por_espada7_espada1_espada10_y_basto1_basto11_basto12_ante_un_envido_debe_ganar_la_primera_triada_de_cartas', () => {

        const ManoGanadora = new Envido(new SieteEspada(), new AnchoEspada(), new DiezEspadas()).compite(new Envido(new AnchoBasto(), new OnceBastos(), new DoceBastos()))

        should(ManoGanadora.equals(new Envido(new SieteEspada(), new AnchoEspada(), new DiezEspadas()))).be.eql(true)    
    });
});