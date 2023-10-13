/*
 * Declarar arreglo
 */

// Antigua - no recomendada
let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');

// Recomendada
const coches = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(coches);

/*
 * Recorrer Arreglos
 */
console.log(coches[1]);

// For
for (let contador = 0; contador < coches.length; contador++) {
    console.log(contador + ': ' + coches[contador]);
    console.log(`${contador}: ${coches[contador]}`)
}

// For of
for (const ite of coches) {
    console.log(ite);
}

// For in
for (let index in coches) {
    console.log(index + ': ' + coches[index]);
}

// For each
coches.forEach(coche => {
    console.log(coche);
});

/*
 * Modificar Valores del Array
 */
coches[1] = 'MercedesBenz';
console.log(coches[1]);

/*
 * Adicionar elementos
 */
coches.push('Nissan');
console.log(coches);

// Forma no recomendada por posible dejada de elemento vacío
console.log(coches.length);
coches[coches.length] = 'Audi';
console.log(coches);

// Extraer un elemento del array
console.log(coches.pop())
coches
console.log(coches.pop())
coches

/*
 * Como saber si es un arreglo
 */
console.log(typeof coches);
console.log(Array.isArray(coches));
console.log(coches instanceof Array);

console.log(3 + 2 + "7");

let panes = [];
for (let i = 0; i < 101; i++) {
    panes.push(i)

}
console.log(panes)