class Persona {
    constructor(name,age,nacionality){
        this.name = null;
        this.surname = null;
        this.age = null;
        this.nacionality = null;
    }
    saludar(){
        return (`Hola, mi nombre es ${this.name} ${this.surname}, edad ${this.age}, nacionalidad ${this.nacionality}`)
    }
    static mensaje(){
        return (`Hay 8.010.359.063 personas en el mundo`)
    }
}

const miPersona = new Persona();

miPersona.name = "Juan"
miPersona.surname = "Florez"
miPersona.age = 20
miPersona.nacionality = "Colombiana"

console.log(miPersona.saludar())

console.log(Persona.mensaje())