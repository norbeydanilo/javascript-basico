const cliente1 = {
    nombre: "Juan",
    edad: 30,
    saludar: function () { return "Hola " + this.nombre + ", " + this.edad; }
};

console.log(cliente1.saludar());
console.log(cliente1);