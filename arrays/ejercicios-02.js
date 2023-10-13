let myNumbers = [];

for (let i = 1; i <= 100; i++) {
    myNumbers.push(i)
}

console.log(myNumbers)

// ****************************** */

let myNumbers1 = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        myNumbers1.push(i)
    }
}

console.log(myNumbers1)

let myNumbers2 = [];

for (let i = 2; i <= 100; i += 2) {
    myNumbers2.push(i)
}

console.log(myNumbers2)

// ****************************** */

let order = [5, 7, 2];

console.log(order.sort((a, b) => a - b))

// Para saber más sobre el método sort revisa este enlace: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Método Bubble Sort. Para saber más sobre bubble sort revisa este enlace: https://www.geeksforgeeks.org/bubble-sort/
const numerosOrdenados = [23, 12, 5, 20, 78, 63, 59, 1, 0];
for (let j = 0; j < numerosOrdenados.length; j++) {
    for (let i = 0; i < numerosOrdenados.length; i++) {
        let aux = 0;
        if (numerosOrdenados[i] > numerosOrdenados[i + 1]) {
            aux = numerosOrdenados[i];
            numerosOrdenados[i] = numerosOrdenados[i + 1];
            numerosOrdenados[i + 1] = aux;
        }
    }
}

console.log(numerosOrdenados);

// Para saber sobre otros métodos de ordenamiento como selection sort o insertion sort revisa este enlace: https://www.geeksforgeeks.org/selection-sort/, https://www.geeksforgeeks.org/insertion-sort/