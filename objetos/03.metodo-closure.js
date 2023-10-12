const constructor = function (precio) {
      const miObjeto = {
            precioBase: precio,
            iva: 1.21,
            calcularIva: function () {
                  return this.precioBase * this.iva;
            }
      };
      return miObjeto;
};

precio1 = constructor(100);
console.log(precio1);

console.log(precio1.calcularIva());

// 121

/* ******************************** */

let cons = function (parametro) {
      const miObjeto = {
          propiedad1: parametro
      }
      return miObjeto;
  }
  
  nuevoObjeto = cons("Norbey");
  nuevoObjeto;
  //miObjeto;