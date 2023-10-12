/*
 * Funciones expresadas o anónimas.
 * Las funciones expresadas hacen parte del ámbito concreto del programa, es decir, estas funciones no 
 * existen hasta que la expresión que las genera es ejecutada. 
 * Se consideran una buena practica de programación para tener el código ordenado
 */

console.log("--------------------Función Expresada-----------------------");
const funcionExpresada = function () {
    return console.log("Esta es una función expresada!");
}
funcionExpresada();

/*
 * Funciones anónimas autoejecutables (IIFE).
 * Son funciones que se ejecutan al momento de crearlas. Su sintaxis es la siguiente:
 * (function (parametros){//contenido de la funcion})(parametros);
*/

console.log("----------Funciones anonimas autoejecutables (IIFE)-------------");
(function () {
    console.log("Mi primera funcion anonima autoejecutable (IIFE)");
})();

(function (num) {
    num % 2 == 0 ? console.log("par") : console.log("impar")
})(3);

const identificar = function (num1, num2) {
    result = num1 !== num2 ? num1 > num2 ? 1 : -1 : 0;
    return result
};
console.log(identificar(40, 40));

const relacion = function (a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
};
console.log(relacion(5, 3));
console.log(relacion(3, 5));
console.log(relacion(4, 4));