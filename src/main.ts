import "./style.css";

interface Grupo {
  nombre: string,
  fundacion: number,
  enActivo:boolean,
  genero:string
}

let generoPopRock = '🎵 Pop Rock';
let generoRock = '🎸 Rock';
let generoHardRock = '🤘 Hard Rock';
let generoClasica = '🎼 Clásica';
let styleNombre : string = 'font-weight:bold; font-size:18px; background-color:green;'

const grupo1: Grupo = {
  nombre: '%cThe Beatles',
  fundacion: 1960,
  enActivo: false,
  genero: generoPopRock
}
const grupo2: Grupo = {
  nombre: '%cQueen',
  fundacion: 1970,
  enActivo: false,
  genero: generoRock
}
const grupo3: Grupo = {
  nombre: '%cAC DC ',
  fundacion: 1973,
  enActivo: true,
  genero: generoHardRock
}
const grupo4: Grupo = {
  nombre: '%cLudwig van Beethoven',
  fundacion: 1770,
  enActivo: false,
  genero: generoClasica
}
const grupo5: Grupo = {
  nombre: '%cThe Rolling Stones',
  fundacion: 1962,
  enActivo: true,
  genero: generoRock
}

// The Beatles / 1960 / Activo: true / 🎵 Pop Rock
console.log(grupo1.nombre, styleNombre, `/ ${grupo1.fundacion} / ${grupo1.enActivo} / ${grupo1.genero}`);

// Queen / 1970 / Activo: false / 🎸 Rock
console.log(grupo2.nombre, styleNombre, `/ ${grupo2.fundacion} / ${grupo2.enActivo} / ${grupo2.genero}`);

// AC DC / 1973 / Activo: true / 🤘 Hard Rock
console.log(grupo3.nombre, styleNombre, `/ ${grupo3.fundacion} / ${grupo3.enActivo} / ${grupo3.genero}`);

// Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
console.log(grupo4.nombre, styleNombre, `/ ${grupo4.fundacion} / ${grupo4.enActivo} / ${grupo4.genero}`);

// The Rolling Stones / 1962 / Activo: true / 🎸 Rock
console.log(grupo5.nombre, styleNombre, `/ ${grupo5.fundacion} / ${grupo5.enActivo} / ${grupo5.genero}`);






