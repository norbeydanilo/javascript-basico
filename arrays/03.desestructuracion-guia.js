/*
 * Desestructuración:
 * Asignación de los elementos de un arreglo u objeto a una variable
 * 
 * Sin desestructuración asignar los elementos de un arreglo u objeto a una variable se podria hacer de la siguiente manera
 */

console.log("--------------Sin desestructuración-------------------")

const numeros = [1, 2, 3]
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2]

console.log(uno, dos, tres)

// Con desestructuración
console.log("--------------Con desestructuración-------------------")

const [one, two, three, four] = numeros; // En una sola linea de código se asignan los valores de numero a las variables one, two y three
console.log(one, two, three, four)

// Con los objetos también es posible hacer desestructuración siguiendo la misma lógica
const persona = {
    nombre: "Ana",
    apellido: "Santos",
    edad: 23
}

const { nombre, apellido, edad, nacionalidad } = persona; // deben tener el mismo nombre del la llave del objeto

console.log(nombre, apellido, edad, nacionalidad)

/*
 * Esto es útil cuando queremos acceder a propiedades específicas de un objeto de manera más concisa y legible.
 * Puede simplificar el código al evitar tener que acceder a las propiedades del objeto utilizando
 * la notación de punto o corchetes repetidamente.
 */

// Para saber más sobre desestructuración, revisa este enlace: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment