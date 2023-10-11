let a = 3, b = 2, c = "3", d = 3;

// Igualdad == , se revisa el valor sin importar el tipo
let z = (a == b);
console.log(z);

z = (a == c);
console.log(z);

// Igualdad estricta ===, se revisa el valor importando el tipo
z = (a === c);
console.log(z);


/* Operador Distinto a: */

// Distinto a
z = (a != c);
console.log(z);

// Distinto a estricto
z = (a !== c);
console.log(z);

/*
 * Operadores Relacionales
 */
b = 3;

// Menor
z = (a < b);
console.log(z);

// Menor o igual
z = (a <= b);
console.log(z);

// Mayor
z = (a > b);
console.log(z);

// Mayor o igual
z = (a >= b);
console.log(z);