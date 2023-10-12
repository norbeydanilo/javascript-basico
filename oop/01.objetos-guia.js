/*
 * Objetos
 * Los objetos son un conjunto de propiedades, en donde cada una tiene asociada un nombre y un valor (key-value)
*/

const persona = { // Definición del objeto persona
    // Definición de las propiedades
    nombre: "Beatriz",
    apellido: "Colón",
    edad: 39,
    soltera: true,
    // Se pueden agregar objetos dentro de objetos
    contacto: {
        email: "beatriz@example.com",
        tel: ["12345", "67890", "98765"] //"+57 1234567890"
    },
    // Se pueden agregar funciones dentro de los objetos
    saludar: function () {
        return `Hola! Mi nombre es ${this.nombre} :)`
    },
    llamar: function () {
        // this nos permite hacer referencia a la instancia actual
        // en funciones flecha no se tiene definido el propio this, por lo tanto no se puede usar para hacer referencia. En ese caso
        // se recomienda usar función expresada y anónima
        return `Llamame al ${this.contacto.tel}` // Si deseas acceder a múltiples elementos de un array, necesitarás hacerlo de manera individual
    }
}

/*
 * Para acceder a una propiedad del objeto se hace de la siguiente manera:
 * nombreObjeto.nombrePropiedad
 */
console.log(`Hola, mi nombre es ${persona.nombre} y mi edad es ${persona["edad"]}; mi correo electrónico es ${persona.contacto.email}`);

//Para llamar la función dentro del objeto utilizamos el . también
console.log(persona.llamar());
console.log(persona.saludar());

/*
 *Se pueden recorrer las propiedades de un objeto utilizando el ciclo for
 */
console.log("-----------------Recorrer un objeto----------------------")

// For in: loop que permite recorrer las propiedades de un objeto

const mario = { // Objeto mario
    // Propiedades
    nombre: "Mario",
    apellido: "Mendoza",
    edad: 42
}

// Por cada llave en el objeto mario se imprimira la llave y el valor
for (const key in mario) {
    console.log(`Llave: ${key}, Valor: ${mario[key]}`)
}