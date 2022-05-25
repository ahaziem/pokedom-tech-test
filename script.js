import pokemonArray from "./data/pokemon.js";
// console.log(pokemonArray);

// need to do a for loop on object
// need innerHTML to display it on the webpage

// Create a variable to get access to the card from the HTML

const pokemonImage = document.querySelector(".card__image");
// const pokemonName = document.querySelector(".card__heading");
// const pokemonCard = document.querySelector(".card");
// const pokemonTypes = document.querySelector(".card__text");

// create a variable that will go through the object in the array
const nameOfPokemon = pokemonArray.map((nameOfPokemon) => {
  return nameOfPokemon.name;
});

console.log(nameOfPokemon);

const idOfPokemon = Object.entries(pokemonArray);
idOfPokemon.forEach((idOfPokemon) => {
  return idOfPokemon[1].id;
});

const typeOfPokemon = Object.entries(pokemonArray);
typeOfPokemon.forEach((typeOfPokemon) => {
  return typeOfPokemon[1].types;
});

const imageOfPokemon = Object.entries(pokemonArray);
imageOfPokemon.forEach((imageOfPokemon) => {
  return imageOfPokemon[1].sprite;
});

pokemonImage.innerHTML += "<div>${imageOfPokemon}</div>";

console.log(imageOfPokemon);
