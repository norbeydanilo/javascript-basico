var variable = "Norbey";
console.log(variable);

// Variables con let - cambio de valor
let nombre;
nombre = "Camilo";
console.log(nombre);

// Constantes - valores constantes
const apellido = "Mendez";

/*
 * Buenas prácticas para declarar variables:
 * 
 * 1. Let para valores que cambian
 * 2. Const para valores que no cambian
 * 
 * Los nombres de las variables se van a emplear con camel case (nombreCompleto)
 */
let nombreCompleto = "Camilo Rocha";
console.log(nombreCompleto);

// Declaración de variables sin asignación de valor
let x, y;
const c1 = 10, c2 = 20;
x = 5;
y = 3;

let z = x + y;
console.log(z);

/* Javascript es sensible a las minúsculas y mayúsculas */
let nombrecompleto2 = "Sebastian Vanegas";
let nombreCompleto2 = "Camilo Rocha";

console.log(nombrecompleto2);
console.log(nombreCompleto2);

// Las variables pueden empezar por letras, $ o _
let _1654;
let $gsdgsdg;
let a1654;

/**
 * Comparación Let y var
 */
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es global

  console.log(a);  // 4
  console.log(b);  // 1
}

console.log(a); // 5
console.log(b); // 1