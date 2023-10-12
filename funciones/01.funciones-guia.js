// Funciones declaradas
let n1 = 14;
let n2 = 34;

function sumar(a, b) {
    value = a + b;
    return value;
}

let num = sumar(n1, n2);
console.log(num)

function saludar() {
    msj = "Hola mundo!";
    return msj;
}

let str = saludar(); // se puede llamar antes o después
console.log(str);

// Funciones expresadas
const saludo = function () {
    mssg = "Holis Mundussss!";
    return mssg;
}

console.log(saludo()); // no es posible llamarse antes