// Función flecha para ordenar un arreglo con bubble sort
let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

// Descomposición 

// Función anónima tradicional
(function (a) {
    return a + 100;
});

// 1. Remover "function" y reemplazar con arrow entre el argumento y el bracket de apertura
(a) => {
    return a + 100;
};

// 2. Remover el cuerpo y el "return" — return está implícito.
(a) => a + 100;

// 3. Remover el parentesis del parámetro
const p = a => a + 100;
console.log(p(1));

// ************************* //

// Función anónima tradicional
let x = (function (a, b) {
    return a + b + 100;
});

// Arrow function
const z = (a, b) => a + b + 100;
console.log(z(1, 2));

const a = 4;
const b = 2;

// ************************* //

// Traditional anonymous function (no parameters)
(function () {
    return a + b + 100;
});

// Arrow function (no parameters)
const w = () => a + b + 100;
console.log(w(a, b));

// ************************* //

// Traditional anonymous function
(function (a, b) {
    const chuck = 42;
    return a + b + chuck;
});

// Arrow function
const q = (a, b) => {
    const chuck = 42;
    return a + b + chuck;
};
console.log(q(a, b));

// ************************* //

// Traditional Function
function bob(a) {
    return a + 100;
}

// Arrow Function
const bob2 = (a) => a + 100;