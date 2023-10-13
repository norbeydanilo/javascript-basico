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

// ******************************

const mascota1 = {
    _nombre: 'Max',
    _edad: 3,
    caracteristicas: {
      _tamanio: 'Mediano',
      _color: 'Marrón',
      raza: 'Labrador'
    },
    propietario: {
      nombre: 'Juan',
      direccion: {
        calle: 'Av. Principal',
        ciudad: 'Madrid',
        codigoPostal: '28001'
      }
    }
  };

const {
    _nombre,
    _edad,
    caracteristicas: { _tamanio, _color, raza },
    propietario: { nombre: nombrePropietario, direccion: { calle, ciudad, codigoPostal } }
  } = mascota1;
  
  console.log(nombre);           // Max
  console.log(edad);             // 3
  console.log(_tamanio);          // Mediano
  console.log(_color);            // Marrón
  console.log(raza);             // Labrador
  console.log(nombrePropietario); // Juan
  console.log(calle);            // Av. Principal
  console.log(ciudad);           // Madrid
  console.log(codigoPostal);      // 28001

// En los arrays no es necesario tener el mismo nombre pero sí el orden
// En los objetos si es necesario tener el mismo nombre para la desestructuración