// Superclase
class Animal {
    constructor(nombre, genero, tipo) {
        this.nombre = nombre;
        this.genero = genero;
        this.tipo = tipo;
    }

    saludar() {
        let saludo = `Hola, soy un animal y mi nombre es ${this.nombre}`;
        return saludo;
    }
}

// Subclase
class Gato extends Animal {
    constructor(nombre, genero, color, tipo) {
        super(nombre, genero, tipo);
        this.color = color;
        this.raza = null;
    }

    // Sobreescritura de método // Polimorfismo
    saludar() {
        let saludo = `Hola, soy un ${this.tipo} y mi nombre es ${this.nombre} y mi raza ${this.getRaza}`;
        return saludo;
    }

    get getRaza() {
        return this.raza;
    }

    set setRaza(raza) {
        this.raza = raza;
    }
}

// Prueba
const milla = new Gato("Milla", "Macho", "Cafecito", "Gato");
console.log(milla);
console.log(milla.saludar());

milla.setRaza = "Angora turco";
console.log(milla.getRaza);
console.log(milla.raza);
console.log(milla);
milla.raza = "Siames"
console.log(milla.getRaza);
console.log(milla.raza);

const canela = new Gato("Canela", "Hembra", "Blanco", "Gato");
console.log(canela);
console.log(canela.saludar());

canela.setRaza = "Cálica";
console.log(canela.getRaza);