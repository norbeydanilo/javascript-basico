/*
 * Arreglos (Arrays)
 * Son una colección de elementos o cosas. se definen con corchetes [] o creando una instancia de Array
 */
console.log("-----------------Creación de arreglos----------------------")

const a = [] // Arreglo vacío
const b = [1, 2, 3, 4] // Arreglo con 4 elementos
const c = [1, true, "Hola", ["A", "B", "C"]] // Arreglo mixto
const d = new Array('a', 'b', 'c') // Arreglo creado con una instancia de Array

console.log(a)
console.log(b)
console.log(c)
console.log(d)

/*
 * Para acceder a un elemento de un arreglo se puede hacer de la siguiente manera:
 * nombreArreglo[posicionElemento]
 * La posición del elemento siempre comienza desde 0
*/

console.log("-----------------Acceder a un arreglo----------------------")

console.log(b[2]) // Se accede a la posición del elemento con corchetes y el numero
console.log(`La segunda letra del abecedario es ${d[1]}`)
console.log(c[3][1]) // Así se accede al elemento de un arreglo dentro de otro arreglo

/*
 * Para recorrer todos los elementos de un arreglo se puede hacer con el ciclo for
 */

console.log("-----------------Recorrer un arreglo----------------------")

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90]

console.log("-----------------For----------------------")

/*
 * length es una propiedad de los arreglos con la que se puede obtener la cantidad de elementos que tiene un arreglo. 
 * Se puede usar de la siguiente manera:
 * nombreArreglo.length
 */

// for
for (let i = 0; i < numeros.length; i++) {
    console.log(`El for va por el ${numeros[i]}`)
}

console.log("-----------------ForEach----------------------")

// forEach
numeros.forEach(numero => { // imprimir los elementos de un array
    console.log(`El forEach of va por el ${numero}`)
});

console.log("-----------------For Of---------------------")

// for of
for (const item of numeros) {
    console.log(`El for of va por el ${item}`)
}

console.log("-----------------For In----------------------")

// for in
for (const key in numeros) {
    console.log(`El for in va por el ${numeros[key]}`)
}

let obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`);
}

/*
 * Para crear un nuevo elemento en un arreglo se puede hacer de la siguiente manera:
 *  nombreArreglo.push(elemento)
 * El elemento se añade al final del arreglo
 * 
 * Para eliminar un elemento de un arreglo se puede hacer de la siguiente manera:  
 *  nombreArreglo.pop()
 * El elemento se elimina del final del arreglo
 * 
 * Para modificar un elemento de un arreglo se puede hacer de la siguiente manera:
 *  nombreArreglo[posicionElemento] = elemento
 * El elemento se modifica en la posicion del elemento
 */

/*
 * for: Es el bucle más básico en JavaScript. Itera sobre una secuencia de números y se ejecuta un número específico de veces.
 *
 * forEach: Es un bucle que itera sobre cosas que, obligatoriamente, han de existir. .
 *
 * for of: Este bucle se utiliza para iterar sobre colecciones de datos como arrays, strings, maps, sets, etc. 
 * A diferencia del for in, el for of devuelve una lista de valores del objeto numérico que se está iterando.
 * 
 * for in: Este bucle se utiliza para iterar sobre las propiedades enumerables de un objeto. 
 * Devuelve una lista de claves en el objeto que se está iterando.
 */