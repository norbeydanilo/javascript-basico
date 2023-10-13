const semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const [diaUno, diaDos, diaTres, diaCuatro, diaCinco, diaSeis, diaSiente] = semana;

console.log(diaUno, diaDos, diaTres, diaCuatro, diaCinco, diaSeis, diaSiente);

// ******************************

let myCat = {
    Nombre: 'Eliot',
    Edad: 4,
    Tamaño: 'grande',
    Color: 'gris con rayas negras'
}

const { Nombre, Edad, Tamaño, Color } = myCat;

console.log(Nombre, Edad, Tamaño, Color);

// ******************************

const gatito = {
    nombre: 'Pochita',
    edad: 2,
    tamaño: '60cm x 20cm',
    color: 'café y amarillo'
}

let { nombre, edad, tamaño, color } = gatito;

console.log(nombre, edad, tamaño, color)

// ******************************

const _gatito = {
    nombre: 'Pochita',
    edad: 2,
    tamaño: '60cm x 20cm',
    color: 'café y amarillo',
    amigos: {
        amigo1: 'Michi',
        amigo2: 'Tokyo'
    }
}

let { amigos } = _gatito;
console.log(amigos)

// En los arrays no es necesario tener el mismo nombre pero sí el orden
// En los objetos si es necesario tener el mismo nombre para la desestructuración