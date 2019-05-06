'use strict';

console.log('>> Ready :)');


const cards4 = document.querySelector('#four_cards');
const cards6 = document.querySelector('#six_cards');
const cards8 = document.querySelector('#eight_cards');
const button = document.querySelector('.btn');
const resultsCards = document.querySelector('.cards');
const adalabCard = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';

let number = 0;
const arrPokemon = [];


// Function select input

function choosePairs() {
  if (cards4.checked) {
    number = 4;

  } else if (cards6.checked) {
    number = 6;

  } else if (cards8.checked) {
    number = 8;

  }
  console.log (number);
  const api = `https://raw.githubusercontent.com/Adalab/cards-data/master/${number}.json`;
  getInfo(api);
  console.log(api);
}

button.addEventListener('click',choosePairs);

// Añadir interpolación de cadenas
// function to get info from url

function getInfo(url) {
  resultsCards.innerHTML = '';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      for (const result of data) {
        if (result.image === null) {
          resultsCards.innerHTML += `
        <li class="cards__list">
          <img class="cards__image-pokemon" src="${image}"
        </li>`;
        } else {
          resultsCards.innerHTML += `
        <li class="cards__list">
          <img class="icards__image-adalab" src="${adalabCard}"
        </li>`;
        }
      }
    });
  button.addEventListener('click',getInfo);}
