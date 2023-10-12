const Figura = require('./figura')
class Rectangulo extends Figura {
    constructor(nombre, color, alto, ancho) {
        super(nombre, color)
        this.alto = alto;
        this.ancho = ancho;
    }

    saludar() {
        return (`Hola, soy un ${this.nombre}, mi color es ${this.color}, mi alto es ${this.alto} y mi ancho es ${this.ancho}`)
    }
}

const rect = new Rectangulo('rectángulo', 'azul', 10, 20);

console.log(rect.saludar());