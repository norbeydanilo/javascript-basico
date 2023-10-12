class Figura {
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

module.exports = Figura;