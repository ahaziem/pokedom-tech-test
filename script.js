import pokemonArray from "./data/pokemon.js";

// need innerHTML to display it on the webpage

const displayCard = document.querySelector(".card__content");

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
      return ` 
    <main class="card-container">
    <div class="card">
      <img class="card__image" src="${imageOfPokemon}" alt="Image of pokemon"/>
      <div class="card__content">
        <div class="card__heading">${nameOfPokemon}</div>
        <p class="card__text">${typeOfPokemon}</p>
      </div>
    `;
    })
    .join("");

  return printTheCard;
};

const characterCards = pokemonPrintCard(pokemonArray);
displayCard.innerHTML = characterCards;
