let startBtn = document.getElementById("start-btn")
let newCardBtn = document.getElementById("new-card-btn")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

let cards = []
let sum = 0
let isAlive = true





function sumNums() {
    sum = 0
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        sum += cards[i]
    }

    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        isAlive = true
        messageEl.textContent = "Want to draw another card?"
    } else if (sum === 21) {
        messageEl.textContent = "You've got Blackjack!"
        isAlive = false
    } else if (sum > 21) {
        isAlive = false
        messageEl.textContent = "You've Lost"
    }
}

function startGame() {
    cards = []
    cardsEl.textContent = "Cards: "

    
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards.push(firstCard, secondCard)
    sumNums()

}

function renderGame() {

}

function newCard() {
    if (isAlive === true) {
        let nextCard = getRandomCard()
        cards.push(nextCard)
        cards.textContent = "Cards: "
        sumNums()
    }
}

function getRandomCard() {
    let randomCard = Math.floor( Math.random() * 13 ) + 1
    return randomCard
}

