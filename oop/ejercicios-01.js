const carro = {
    marca: 'Ford',
    modelo: 'Mustang',
    anio: 2020,
    color: 'Negro',
    descripcion: function () {
        return `Hola! Mi marca es ${this.marca}, soy modelo ${this.modelo} y mi color es ${this.color}`
    }
}

console.log(carro.descripcion())
console.log(carro)

/* ******************************** */

const carro1 = {
    marca: "Chevrolet",
    modelo: "69",
    año: 2020,
    color: "rojo",
    descripcion() {
        return `Hola, mi marca es ${this.marca}, soy modelo ${this.modelo} y mi color es ${this.color}`;
    }
}

console.log(carro1.descripcion())

/* ******************************** */

const auto = {
    marca: 'Chevrolet',
    modelo: 'Onix',
    pasajeros: 4,
    descripcion: function () {
        let descripciones = '';
        for (let propiedad in this) {
            if (typeof this[propiedad] !== 'function') {
                descripciones += `${propiedad}: ${this[propiedad]}\n`;
            }
        }
        return descripciones;
    }
}

console.log(auto.descripcion());
// Si se usara función flecha, generará undefined, puesto que las arrow functions no tienen su propio this.

/* ******************************** */

let auto2 = {
    marca: 'Chevrolet',
    modelo: 'Onix',
    pasajeros: 4
};

// si se desea lo mismo pero con función flecha
auto2.descripcion = () => {
    let descripciones = '';
    for (let propiedad in auto2) {
        if (typeof auto2[propiedad] !== 'function') {
            descripciones += `${propiedad}: ${auto2[propiedad]}\n`;
        }
    }
    return descripciones;
}

console.log(auto2.descripcion());

/* ******************************** */
// Ejemplo con función flecha
const auto3 = {
    marca: 'Chevrolet',
    modelo: 'Onix',
    pasajeros: 4,
    descripcion: () => {
        return `Este es un ${auto3.marca} ${auto3.modelo} con capacidad para ${auto3.pasajeros} pasajeros.`;
    }
}

console.log(auto3.descripcion());

/* ******************************** */
// Error con uso de función flecha (función no tiene su propio this)
const auto4 = {
    marca: 'Chevrolet',
    modelo: 'Onix',
    pasajeros: 4,
    descripcion: () => {
        return `Este es un ${this.marca} ${this.modelo} con capacidad para ${this.pasajeros} pasajeros.`;
    }
}

console.log(auto4.descripcion()); // Imprime 'Este es un undefined undefined con capacidad para undefined pasajeros.'
