# Ejercicios de JavaScript - Objetos y OOP

## [Ejercicios-01](https://github.com/norbeydanilo/javascript-basico/blob/main/oop/ejercicios-01.js)

1. **Haga un código** que:
    - Tenga un objeto `carro` con las siguientes propiedades:
        - Marca.
        - Modelo.
        - Año.
        - Color.
2. **Agregue al objeto carro** la función de descripción en la cual imprima lo siguiente:
    - "Hola! Mi marca es `marca`, soy modelo `modelo año` y mi color es `color`"
3. **Imprima por consola** cada una de las propiedades y funciones.

## [Ejercicios-02](https://github.com/norbeydanilo/javascript-basico/blob/main/oop/ejercicios-02.js)

### Clase

1. **Haga un código** que tenga la clase `figura` la cual:
    - Tenga un constructor con el atributo de color.
    - Tenga un método `saludar` e imprima en consola: "Hola! Soy una figura y mi color es `color`"
2. **Cree una instancia** de la clase e imprímala por consola.

### Herencia-01

1. **Cree una clase `cuadrado`** que herede de la clase figura la cual tenga los atributos de alto y ancho.
2. **Sobreescriba el método `saludar`** con el siguiente mensaje: "Hola! Soy un cuadrado. Mi color es `color` y mis medidas son `altoxancho`"
3. **Cree una instancia** de la clase cuadrado e imprímala por consola.

### Herencia-02

1. **Cree una clase `circulo`** que herede de la clase figura la cual tenga el atributo de radio.
2. **Sobreescriba el método `saludar`** con el siguiente mensaje: "Hola! Soy un cuadrado. Mi color es `color` y mi radio es `radio`"
3. **Cree una instancia** de la clase circulo e imprímala por consola.

Se puede ver también la aplicación de este ejercicio en la carpeta: [figuras](https://github.com/norbeydanilo/javascript-basico/blob/main/oop/figuras)

## [Ejercicios-03](https://github.com/norbeydanilo/javascript-basico/blob/main/oop/ejercicios-03.js)

1. **Haga un código** que realice una clase `Persona` la cual tenga un constructor con los atributos `nombre`, `apellido`, `edad` y `nacionalidad`, inicializarlos todos en `null`.
2. Por medio de `setter` asignarle valor a los atributos y obtenerlos con `getter` e imprimirlos por consola.
3. **Cree un método estático** que imprima por consola el siguiente mensaje: "Hay 8.010.359.063 personas en el mundo"
