/*
 * Existen métodos y propiedades que hacen que trabajar con arreglos sea más sencillo
 */

// Crea una arreglo de 100 posiciones con el valor de false
console.log("-----------------Array(n).fill()----------------------")
const a = Array(100).fill(false)
console.log(a)

const colores = ["Rojo", "Azul", "Gris"]
console.log(colores)

// Con el método push() se agrega un elemento en la ultima posición del arreglo.
console.log("-----------------push()----------------------")
colores.push("Verde")
console.log(colores)

// Con el método pop() se elimina el ultimo elemento del arreglo.
console.log("-----------------pop()----------------------")
colores.pop()
console.log(colores)

// Con el metodo slice() se crea una copia del arreglo
console.log("-----------------slice()----------------------")
const copiaColores = colores.slice();
console.log(copiaColores)

// La propiedad lenght obtiene el tamaño del arreglo.
console.log("-----------------lenght----------------------")
console.log(colores.length)

// Revisar otros de los tantos métodos que existen en los arreglos.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array