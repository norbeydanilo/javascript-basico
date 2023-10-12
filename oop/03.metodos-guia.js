/*
 * Métodos
 * -Método estático: Permite ser ejecutado sin necesidad de instanciar la clase
 * -Método Setter: Permite establecer los valores de atributos de nuestra clase
 * -Método Getter: Permite obtener los valores de los atributos de nuestra clase
 */

class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    saludar() {
        return (`Hola, mi nombre es ${this.nombre}`)
    }
}

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        super(nombre, genero)
        this.tamanio = tamanio;
        // Atributo raza se crea nulo para luego pedirlo con el método setter
        this.raza = null;
    }

    saludar() {
        return (`Hola! Soy un perro y mi nombre es ${this.nombre}`)
    }

    static queEres() { // Método estático
        return ("Los perros somos animales mamiferos que pertenecemos a la familia de los caninos")
    }

    // Getter. Obtiene el valor.
    get getRaza() {
        return this.raza;
    }

    // Setter. Modificador o establecedor del valor.
    set setRaza(raza) {
        this.raza = raza;
    }
}

const scooby = new Perro("Scooby Doo", "Macho", "Grande")

// Métodos setter y getter
scooby.setRaza = "Gran Danes"
console.log(scooby.getRaza)

/*
 * Los métodos estáticos no se heredan en las clases hijas y no están disponibles a través de las instancias de la clase. 
 * Solo pueden ser accedidos directamente a través de la clase en sí misma, sin necesidad de crear una instancia.
 */
// Método estático
console.log(Perro.queEres())
//scooby.queEres()

/*
 * Los métodos estáticos se utilizan para definir funcionalidad que no depende del estado de las instancias 
 * y pueden ser accedidos directamente a través de la clase en sí misma.
 */ 