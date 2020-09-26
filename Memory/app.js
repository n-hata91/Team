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
    },
    {
      name: 'rac',
      img: 'images/rac.jpg'
    },
    {
      name: 'rac',
      img: 'images/rac.jpg'
    },
    {
      name: 'sea',
      img: 'images/sea.jpg'
    },
    {
      name: 'sea',
      img: 'images/sea.jpg'
    }
  ]

  // cardArray.sort(() => 0.5 - Math.random()) 簡単シャッフル
  for (let s = cardArray.length - 1; s > 0; s--){
    //乱数生成を使ってランダムに取り出す値を決める
    r = Math.floor(Math.random() * (s + 1));
    //取り出した値と箱の外の先頭の値を交換する
    tmp = cardArray[s];
    cardArray[s] = cardArray[r];
    cardArray[r] = tmp;
  };

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  // create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/card.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  // check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (optionOneId === optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/card.jpg')
      cards[optionTwoId].setAttribute('src', 'images/card.jpg')
      alert('You have clicked same image!')
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/card.jpg')
      cards[optionTwoId].setAttribute('src', 'images/card.jpg')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

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