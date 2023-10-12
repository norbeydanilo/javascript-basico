/*
 * Clases.
 * Son una forma de organizar y simplificar el funcionamiento del código de una aplicación
 * Su sintaxis es la siguiente:
 * class nombreClase{
 *    // propiedades y metodos
 * }
 * Se pueden hacer objetos a partir de las clases de la siguiente forma:
 * const nombreObjeto = new nombreClase()    
 */

console.log("-----------------Clases----------------------")

class Animal { // Definición de una clase
    /* El constructor es un método que se ejecuta al generarse la instancia de la clase */
    constructor(nombre, genero) {
        // Propiedades de la clase animal.
        this.nombre = nombre;
        this.genero = genero;
    }

    saludar() { // Método de la clase animal
        return (`Hola, mi nombre es ${this.nombre}`)
    }
}

// Creación de una instancia de un objeto basado en la clase animal
const caliman = new Animal("Caliman", "Macho")

// Tipo de dato que es caliman
console.log(typeof (caliman))
// Impresión del objeto
console.log(caliman)
// Llamado al método
console.log(caliman.saludar());

/*
 * Herencia
 * Una clase hija hereda las propiedades y métodos de una clase padre. Se utiliza la palabra reservada extends.
 *
 * class nombreClase extends nombreClasePadre{
 *    // propiedades y metodos
 * }
 */

console.log("-----------------Herencia----------------------")

class Perro extends Animal { // La clase perro extiende de la clase animal-
    constructor(nombre, genero, tamanio) {
        // Super es un método que llama al constructor de la clase padre
        super(nombre, genero)
        // Propiedad de la clase perro.
        this.tamanio = tamanio;
    }

    /*
    * Sobreescritura.
    * Permite a las clases hijas hacer una implementación de un método que ha sido dado por una clase padre.
    */
    saludar() { // sobreescritura del método saludar
        return (`Hola! Soy un perro y mi nombre es ${this.nombre}`)
    }

    ladrar() { // método de la clase perro
        return ("Guau Guau")
    }
}

// Instancia de un objeto basado en la clase perro
const scooby = new Perro("Scooby Doo", "Macho", "Grande")

console.log(scooby);
console.log(scooby.saludar());
console.log(scooby.ladrar());