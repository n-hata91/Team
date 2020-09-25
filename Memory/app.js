document.addEventListener('DOMContentLoaded', () => {
  // card option
  const cardArray = [
    {
      name: 'dac',
      img: 'images/dac.jpg'
    },
    {
      name: 'dac',
      img: 'images/dac.jpg'
    },
    {
      name: 'dog',
      img: 'images/dog.jpg'
    },
    {
      name: 'dog',
      img: 'images/dog.jpg'
    },
    {
      name: 'mon',
      img: 'images/mon.jpg'
    },
    {
      name: 'mon',
      img: 'images/mon.jpg'
    },
    {
      name: 'nin',
      img: 'images/nin.jpg'
    },
    {
      name: 'nin',
      img: 'images/nin.jpg'
    }
  ]

  const grid = document.querySelector('.grid')
  var cardsChosen = []
  var cardsChosenId = []

  // create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/card.jpg')
      card.setAttribute('data-id', i)
      // card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }

  // check for matches


  // flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard();
});