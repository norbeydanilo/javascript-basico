/*
 * IF - ELSE IF - ELSE
 */

let numero = "1";

if (numero === 1) {
    console.log("Número 1");
}
else if (numero == 1) {
    console.log("Número 2");
}
else if (numero == 3) {
    console.log("Número 3");
}
else if (numero == 4) {
    console.log("Número 4");
}
else {
    console.log("Número desconocido");
}

/*
 * SWITCH CASE 
 */
numero = 1;

let numeroTexto = "Valor desconocido";

switch (numero) {
    case 1:
        numeroTexto = "Número uno";
        break;
    case 2:
        numeroTexto = "Número dos";
        break;
    case 3:
        numeroTexto = "Número tres";
        break;
    case 4:
        numeroTexto = "Número cuatro";
        break;
    default:
        numeroTexto = "Caso no encontrado";
}

console.log(numeroTexto)