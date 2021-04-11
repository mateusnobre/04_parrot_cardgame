nCards = 1;
possibleNumberOfCards = [...Array(7).keys()].map(i => i + 2).map(j => 2*j);

const cardsBox = document.getElementsByClassName('cards_box')[0];

while (!possibleNumberOfCards.includes(parseInt(nCards))){
    nCards = parseInt(prompt("Com quantas cartas você quer jogar"));
    if (!possibleNumberOfCards.includes(nCards)){
        alert('Você só pode escolher números pares, de 4 a 14.')
    }
}
for (let i = 0; i < nCards; i++) {
    cardsBox.innerHTML += `
      <div class = 'card'></div>
    `;
  }
