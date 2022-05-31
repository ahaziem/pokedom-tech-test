import pokemonArray from "./data/pokemon.js";

// need innerHTML to display it on the webpage

const displayCard = document.querySelector(".card__content");

// create a variable that will go through the object in the array

const pokemonPrintCard = (array) => {
  const printTheCard = array
    .map((pokemon) => {
      return ` 
    <main class="card-container">
    <div class="card">
      <img class="card__image" src="${pokemon.sprite}" alt="Image of pokemon"/>
      <div class="card__content">
        <div class="card__heading">${pokemon.name}</div>
        <p class="card__text">${pokemon.name} (#${pokemon.id}) is a ${pokemon.types[0]} & ${pokemon.types[1]} type pokemon </p>
      </div>
    `;
    })
    .join("");

  return printTheCard;
};

const pokemonCards = pokemonPrintCard(pokemonArray);
displayCard.innerHTML = pokemonCards;
