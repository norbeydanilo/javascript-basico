/*
 * Ejemplos de tipos de datos en JavaScript
 */

/*
 * PRIMITIVOS
 */

// Tipo de dato: String
let nombre = "Camilo";
console.log(nombre);

// Type of - tipo de dato
console.log(typeof nombre);
nombre = 1000; // tipado dinámico
console.log(nombre);
console.log(typeof nombre);

// Tipo de dato: Numérico
let numero = 25;
console.log(numero);
console.log(typeof numero);

// Tipo de dato: Booleano
let bandera = true;
console.log(bandera);
console.log(typeof bandera);

bandera = false;
console.log(bandera);
console.log(typeof bandera);

/*
 * Tipo de dato: Symbol (Valor único para una variable) - ECMA 6
 * Cada vez que creamos uno nuevo, es completamente diferente y no se compara con ningún otro símbolo, 
 * incluso si se crean a partir del mismo valor.
 * 
 * ¿Para que son buenos?:
 * 
 * Para crear y almacenar valores como integer y string que no van cambiar.
 * Se puede utilizar para guardar custom metadata de lo objetos, que son como secundarias para el objeto actual.
 * 
 * Conclusión:
 * 
 * Son unas pequeñas constantes que tienen algunas propiedades extras, que nos permiten trabajar mejor en debug y guardar valores únicos.
 */
let simbolo = Symbol("Mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

let simbolo2 = Symbol("Mi simbolo");

console.log(simbolo === simbolo2);

console.log(Symbol("hola") === Symbol("hola"))

// Tipo de dato: Undefined (default). Cuando se declara pero no se iniciliza
let x;
console.log(x);
console.log(typeof x);

let c = undefined;
console.log(c)
console.log(typeof c)

let num = 5;
let numS = "10";

let suma = num + numS;
console.log(suma)
console.log(typeof suma)

/**
 * OBJETOS
 */

// Tipo de dato: Objeto - object. Objetos literales
const objeto = {
    nombre: "Norbey",
    apellido: "Muñoz",
    telefono: 3153160759
}

console.log(objeto);
console.log(typeof objeto);

// Tipo null
let y = null;
console.log(y);
console.log("NULOOOO: " + typeof y);

// Array
let autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos)
console.log(typeof autos)

/**
 * FUNCIONES
 */

// Tipo de dato: function
function myfuncion() {

}
console.log(myfuncion);
console.log("FUNCIÓN: " + typeof myfuncion);

// Tipo de dato: Clase, también son funciones (ECMA v6)
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);