/*
 * Función declarada.
 * Son funciones que forman parte del ámbito global del programa, que para que se ejecuten se debe hacer un 
 * llamado a la función, independientemente de donde se declaren.
 * Pueden ser llamadas desde cualquier parte del código.
 */

// Función declarada sin parámetros y sin valor de retorno
console.log("-----------------------------------------------------")

function estoEsUnaFuncion() {
    console.log("Uno")
    console.log("Dos")
    console.log("Tres")
}

// Invocacion de la funcion
estoEsUnaFuncion();

// Función declarada con parámetros y valor de retorno
console.log("-----------------------------------------------------")

function saludar(nombre, edad) {
    return `Hola mi nombre es ${nombre} y mi edad es ${edad}`
}

console.log(saludar("Amparo", 39));

// Asignación de valores por defecto a una funciones
console.log("-----------------------------------------------------")

function carrera(nombre = "desconocido", carrera = "desconocido") {
    return console.log(`Hola, mi nombre es ${nombre} y estudié ${carrera}`)
}

carrera("Juan", "desarrollo web")
carrera(); // Cuando no se agrega parámetro muestra el valor asignado en la función

function suma(num1, num2) {
    return num1 + num2
}
console.log(suma(6, 2))

function resta(minuendo, sustraendo) {
    return minuendo - sustraendo
}
console.log(resta(6, 2))

function multiplicacion(num1, num2) {
    return num1 * num2
}
console.log(multiplicacion(6, 2))

function division(dividendo, divisor) {
    return dividendo / divisor
}
console.log(division(6, 2))

function operacion(a, b) {
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
}

operacion(6, 6)

function convertidor(pesos) {
    console.log(pesos / 4317)
}
convertidor(4317)

function convertidorD(dolar) {
    console.log(dolar * 4317)
}
convertidorD(7)

function deUSaPesos(tasa, cantidad) {
    let cambio = tasa * cantidad;
    return cambio;
}
let cambio = deUSaPesos(4317, 7);
console.log(cambio);

const PI = 3.1416

function areaCirculo(radio) {
    return `el área del circulo es ${PI * (radio * radio)}`
}
console.log(areaCirculo(4));

function areaCuad(altura, base) {
    return (altura * base) ^ 2
}

console.log(areaCuad(7, 7))

const areaCua = (altura, base) => (altura * base) ^ 2
console.log(areaCua(7, 7))

function areaTriagular(base, altura) {
    let area = (base * altura) / 2;
    return area;
}

let baseTriagular = 5;
let alturaTriagular = 7;
let areaTriangulo = areaTriagular(baseTriagular, alturaTriagular);
console.log("El área del triángulo es: " + areaTriangulo);