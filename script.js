import { pokemonArray } from "./data/pokemon.js";
pokemonArray = require("./data/pokemon.js")
// console.log(pokemonArray);

// need to do a for loop on object
// need innerHTML to display it on the webpage

const pokemonImage = document.querySelector(".card__image");
const pokemonName = document.querySelector(".card__heading");
const pokemonCard = document.querySelector(".card");
const pokemonTypes = document.querySelector(".card__text");

const keys = Object.keys(pokemonArray);
console.log(keys);
