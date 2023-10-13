let peliculas = ['La milla verde', 'Parásitos', 'El viaje de Chihiro', 'Coco', 'Interstellar'];

// For
for (let i = 0; i < peliculas.length; i++) {
    console.log(`Película ${i + 1}: ${peliculas[i]}`)
}

// forEach
peliculas.forEach(pel => {
    console.log(`Película: ${pel}`)
})

peliculas.forEach((pel, i) => {
    console.log(`Posición ${i + 1}: ${pel}`)
})

// for...in
for (let i in peliculas) {
    console.log(`Película ${parseInt(i) + 1}: ${peliculas[i]}`)
}

// for...of
for (const movie of peliculas) {
    console.log(movie);
}

let i = 0;
for (pelicula of peliculas) {
    console.log(`La pelicula ${i + 1} es: ${peliculas[i]}`)
    i++;
}

for (const [index, value] of peliculas.entries()) {
    console.log('pelicula:', index + 1, value);
}