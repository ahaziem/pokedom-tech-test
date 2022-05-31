import pokemonArray from "./data/pokemon.js";

// need innerHTML to display it on the webpage

const displayCard = document.querySelector(".card__content");
const card = document.querySelector(".card");
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

const pokemonPrintCard = (array) => {
  let printTheCard = array
    .map(() => {
      return ` <div class="card">
  <img class="card__image" src="${imageOfPokemon}"/>
  <div class="card__content">
    <div class="card__heading">${nameOfPokemon}</div>
    <p class="card__text">${typeOfPokemon}</p>
    </div>`;
    })
    .join("");

  return printTheCard;
};

const characterCards = printTheCard(pokemonArray);
displayCard.innerHTML = characterCards;
