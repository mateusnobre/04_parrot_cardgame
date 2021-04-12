function compare() { 
	return Math.random() - 0.5; 
}

nCards = 1;
possibleNumberOfCards = [...Array(7).keys()].map(i => i + 2).map(j => 2*j);

const cardsBox = document.getElementsByClassName('cards_box')[0];

while (!possibleNumberOfCards.includes(parseInt(nCards))){
    nCards = parseInt(prompt("Com quantas cartas você quer jogar"));
    if (!possibleNumberOfCards.includes(nCards)){
        alert('Você só pode escolher números pares, de 4 a 14.')
    }
}

cardImages = ['bobrossparrot.gif',
                'explodyparrot.gif',
                'fiestaparrot.gif',
                'metalparrot.gif',
                'revertitparrot.gif',
                'tripletsparrot.gif',
                'unicornparrot.gif']
possibleImageIndices = [...Array(nCards/2).keys()];
possibleImageIndices = possibleImageIndices.concat(possibleImageIndices)
possibleImageIndices.sort(compare);

for (let i = 0; i < nCards; i++) {
    cardsBox.innerHTML += `
      <div class = 'card'> 
        <div class="front-face face">
            <img src="images/front.png" alt="Parrot on the front of each card">
        </div>
        <div class="back-face face">
            <img src="images/${cardImages[possibleImageIndices[i]]}" alt="Card ${possibleImageIndices[i]}">
        </div>
      </div>
    `;
  }

  let cards = document.getElementsByClassName('card');
  let selectedCards = document.getElementsByClassName('selected');
  let scoredCards = document.getElementsByClassName('scored');
  let clickCount = 0;
  for (var i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', function(){
        clickCount += 1;
        this.classList.add('selected')
        if (selectedCards.length == 2){
            firstCard = selectedCards[0].getElementsByClassName('back-face')[0];
            secondCard = selectedCards[1].getElementsByClassName('back-face')[0];
            if (firstCard.innerHTML == secondCard.innerHTML){
                selectedCards[0].classList.add('scored');
                selectedCards[1].classList.add('scored');
                selectedCards[0].classList.remove('selected');
                selectedCards[0].classList.remove('selected');
            }
            else {
                setTimeout(function(){
                    selectedCards[0].classList.remove('selected');
                    selectedCards[0].classList.remove('selected');
                } , 1000);
            }
        }
        if (scoredCards.length == nCards){
            setTimeout(alert(`Você ganhou após ${clickCount} jogadas!`), 1000);_
        }
    })
}