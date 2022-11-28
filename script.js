import pokemonArray from "./data/pokemon.js";

const card = document.querySelector(".card-container");
const inputBox = document.querySelector(".input");

const generateCards = (pokemonArray) => {
  pokemonArray.filter((pokemon) => {
    return (card.innerHTML += `<div class=card><img src="${
      pokemon.sprite
    }" class="card__image"/>
    <div class="card__content"><h2 class="card__heading">${
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    }</h2>
        <p class="card__text">${
          pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        } (#${pokemon.id}) is a ${pokemon.types.join(
      " & "
    )} type pokemon.</p></div> `);
  });
};
generateCards(pokemonArray);
