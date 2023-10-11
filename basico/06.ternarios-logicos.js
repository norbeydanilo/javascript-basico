/* 
 * 1. Variable a la que se asigna el valor
 * 2. Expresión de la que resulta valor booleano
 * 3. Valor a asignar si booleano es verdadero
 * 4. Valor a asignar si booleano es falso
 */

let resultado = (1 > 2) ? "verdadero" : "falso";
console.log(resultado);

let resultado2 = (1 > 2) ? "verdadero" : 0;
console.log(resultado2);

let numero = 10;
resultado = (numero % 2 == 0) ? "par" : "impar";
console.log(resultado);

let vertebrado = false, mamifero = false;
let animal = (vertebrado || mamifero) ? "alguno de los dos" : "ninguno";
console.log(animal)

// AND

let a = 11;
let minimo = 0;
let maximo = 10;

if (a >= minimo && a <= maximo) {
    console.log("El número está en el rango")
}
else {
    console.log("El número está fuera del rango")
}

// OR

let vacaciones = false;
let diaDescanso = true;

if (vacaciones || diaDescanso) {
    console.log("El padre puede asistir al juego del hijo");
}
else {
    console.log("El padre está ocupado");
}