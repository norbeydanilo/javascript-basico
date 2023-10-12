const constructor = function (precio) {
    let iva = 1.21;  // definimos "iva" dentro de la función pero fuera del objeto
    const miObjeto = {
        precioBase: precio,
        calcularIva: function () {
            return this.precioBase * iva; // accedemos a "iva"
        }
    };
    return miObjeto;
};

precio1 = constructor(100);
console.log(precio1);

console.log(precio1.calcularIva());