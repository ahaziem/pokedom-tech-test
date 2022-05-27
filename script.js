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

const idOfPokemon = pokemonArray.map((idOfPokemon) => {
  return idOfPokemon.id;
});

const typeOfPokemon = pokemonArray.map((typeOfPokemon) => {
  return typeOfPokemon.types;
});

const imageOfPokemon = pokemonArray.map((imageOfPokemon) => {
  return imageOfPokemon.sprite;
});

pokemonImage.innerHTML += `<div>${imageOfPokemon}</div>`;

// console.log(imageOfPokemon);
