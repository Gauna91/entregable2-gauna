const producto1 = {
    nombre:"luigui bosca",
    caracteristicas: "tinto color roojo violaceo brillante.Sus aromas son intensos y amables, con notas que recuerdan a frutas rojas, y tonos algo florales y especiados",
    tipo: "malbec", 
    maridajes:"carnes, pastas",
    precio: 12400,
    descuento: 10
}

const producto2 = {
    nombre:"Trumpeter",
    caracteristicas: "De un impactante color violeta, naris frutal destacando ciruelas, cerezas y notas de flores",
    tipo: "malbec", 
    maridajes:"Tablas de quesos duros, carnes vacunas grilladas y pastas rellenas con salsa a base de carnes",
    precio: 8500,
    descuento: 10
}
const producto3 = {
    nombre:"D.V Catena",
    caracteristicas: "Aporta aromas de mermelada de ciruelas maduras y moras negras, suavidad y volumen al paladar",
    tipo: "malbec, malbec", 
    maridajes:"carnes rojas, carnes a la parrilla, verduras salteadas",
    precio: 14900,
    descuento: 10
}
const producto4 = {
    nombre:"Rutini",
    caracteristicas: "Rojo violaceo, con matices azulados, En nariz, se destaca una gran complejidad aromatica: Notas de ciruela entremezcladas con especias que recuerdan a vainillas, anis y pimiemta negra",
    tipo: "malbec", 
    maridajes:"carnes vacunas, quesos duros, locro, guiso de lentejas, cordero, chivito",
    precio: 28000,
    descuento: 10
}
const producto5 = {
    nombre:"Alamos",
    caracteristicas: "Presenta un profundo color purpura con reflejos violetas, su aroma remite a intensos frutos negros con ligeras notas florales y de tostado",
    tipo: "malbec", 
    maridajes:"carnes rojas, pizzas, aves condimentadas",
    precio: 9500,
    descuento: 10
}
const vinos = [producto1, producto2, producto3, producto4, producto5]
console.log(vinos)

for (const vino of vinos){
    console.log(vino.nombre)
}
