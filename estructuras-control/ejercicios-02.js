/*
 * While.
 * Permite ejecutar un código mientras se cumpla una condición. Condicionado al inicio.
 * Como se ve a continuación
 */
console.log("-----------------Condicional while----------------------")

let cont = 0

/* La variable cont aumenta en uno. Sigue siempre y cuando el contador sea menor que 10 */
while (cont <= 10) {
    console.log(`El while va en ${cont}`)
    cont++
}

/*
 * For
 * Permite ejecutar un código un número determinado de veces.
 * Como se ve a continuación
 */

/* La variable i aumenta de uno en uno siempre que sea menor que 10 */
console.log("-----------------Condicional for----------------------")

for (let i = 0; i <= 10; i++) {
    console.log(`El for va en ${i}`)
}

for (let i = 10; i > 0; i--) {
    console.log(`${i}`)
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`${i}`)
    }
}

for (let i = 0; i < 10; i += 2) {
    console.log(`$El for va en ${i}`);
}

let i = 1

for (i; i <= 10; i++) {
    console.log(`${i}x7=${i * 7}`)
}