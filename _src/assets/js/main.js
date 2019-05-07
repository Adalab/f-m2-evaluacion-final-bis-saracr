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
    saveData(4);
  } else if (cards6.checked) {
    number = 6;
    saveData(6);
  } else if (cards8.checked) {
    number = 8;
    saveData(8);
  }
  console.log (number);
  const api = `https://raw.githubusercontent.com/Adalab/cards-data/master/${number}.json`;
  getInfo(api);
  console.log(api);
}

button.addEventListener('click',choosePairs);

// function to get info from url

function getInfo(url) {
  resultsCards.innerHTML = '';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      for (const result of data) {
        resultsCards.innerHTML += `
        <li class="cards__list">
          <img class="cards__image-adalab" src="${adalabCard}">
          <img class="cards__image-pokemon hidden" src="${result.image}">
        </li>`;

      }
      const cards = document.querySelectorAll('.cards__list');
      for (const card of cards){
        card.addEventListener('click',flipCards);
      }
    });
  button.addEventListener('click',getInfo);
}

// Función ocultar las vistas frontales y muestro la traseras

function flipCards (event){
  const cards = event.currentTarget;
  const cardPokemon = cards.querySelector('.cards__image-pokemon');
  const cardAda = cards.querySelector('.cards__image-adalab');
  cardPokemon.classList.toggle('hidden');
  cardAda.classList.toggle('hidden');
}



// Local

const saveValue = localStorage.getItem('inputValue');
inputValue();

function inputValue() {
  if (saveValue === '4'){
    cards4.checked = true;
  } else if (saveValue === '6') {
    cards6.checked = true;
  } else if (saveValue === '8') {
    cards8.checked = true;
  }
}


function saveData(number){
  localStorage.setItem('inputValue',number);
}
