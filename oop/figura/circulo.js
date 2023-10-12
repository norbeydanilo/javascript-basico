const Figura = require('./figura')
class Circulo extends Figura {
    constructor(nombre, color, radio) {
        super(nombre, color);
        this.radio = radio;
    }
    saludar() {
        return `Hola, soy un ${this.nombre} y mi color es ${this.color} y mi radio es ${this.radio}`;
    }
}

const circulito = new Circulo("Circulo", "Verde", 10);

console.log(circulito.saludar());