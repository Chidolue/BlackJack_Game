let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

let cards = []
let sum = 0
let isAlive = true




function startGame() {
    cardsEl.textContent = "Cards: "    
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    renderGame()

}

function renderGame() {
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

function newCard() {
    if (isAlive === true) {
        let nextCard = getRandomCard()
        cards.push(nextCard)
        cards.textContent = "Cards: "
        renderGame()
    }
}

function getRandomCard() {
    let randomCard = Math.floor( Math.random() * 13 ) + 1
    if (randomCard === 11 || randomCard === 12 || randomCard === 13){
        return 10
    } else if (randomCard === 1) {
        return 11
    } else {
        return randomCard
    }
}

