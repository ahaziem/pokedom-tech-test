import pokemonArray from "./data/pokemon.js";

// need innerHTML to display it on the webpage

// const displayCard = document.querySelector(".card__content");
// const card = document.querySelector(".card");
const pokemonImage = document.querySelector(".card__image");
const pokemonName = document.querySelector(".card__heading");
const pokemonCard = document.querySelector(".card");
const pokemonTypes = document.querySelector(".card__text");

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

// card.style.display = "flex";

pokemonImage.innerHTML = imageOfPokemon;
pokemonName.innerHTML = nameOfPokemon;
pokemonTypes.innerHTML = typeOfPokemon;

// pokemonName.innerHTML = nameOfPokemon;
