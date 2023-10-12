class Figura {
    constructor(color) {
        this.color = color;
    }
    saludar() {
        return (`Hola! Soy una figura y mi color es ${this.color}`)
    }
}

const figura = new Figura("blanco");
console.log(figura.saludar())

/* ************************************ */

class Figura1 {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }
    saludar() {
        return (`Hola! soy un ${this.nombre} y mi color es ${this.color}`)
    }
    calcularArea() {
    }
}

const figurita = new Figura1('circulo', 'rojo');
console.log(figurita.saludar())

// ********************************	

class Rectangulo extends Figura1 {
    constructor(nombre, color, alto, ancho) {
        super(nombre, color)
        this.alto = alto;
        this.ancho = ancho;
    }

    saludar() {
        return (`Hola, soy un ${this.nombre}, mi color es ${this.color}, mi alto es ${this.alto} y mi ancho es ${this.ancho}`)
    }
}

const rectan = new Rectangulo('rectángulo', 'azul', 10, 20);
console.log(rectan.saludar());

// *****************************

class Circulo extends Figura1 {
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