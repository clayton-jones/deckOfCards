'use strict'

let cardType = ['Ace', 'King', 'Queen', 'Jack', 10, 9, 8, 7, 6, 5, 4, 3, 2];
let cardSuit = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
let deck = [];

function shuffle () {

}

// Create initial deck of careds
function populateDeck(type, suit) {
    for (let i = 0; i < type.length; i++) {
        for (let j = 0; j < suit.length; j++) {
            let card = {};
            if (typeof type[i] === 'string') {
                card.value = 10;
            } else {
                card.value = type[i];
            }
            if (suit[j] === 'Diamond' || suit[j] === 'Hearts') {
                card.color = 'Red';
            } else {
                card.color = 'Black';
            }
            card.name = type[i];
            card.suit = suit[j];
            deck.push(card);
        }
    }
}
// Called populateDeck function to create initial deck of cards
populateDeck(cardType, cardSuit);

let newCard;
function draw() {
    if (deck.length === 0) {
        document.getElementById('cardDisplay').innerHTML = 'You are out of cards. Please shuffle.'
    } else {
        newCard = deck.shift();
        document.getElementById('cardDisplay').innerHTML = 'You drew a ' + newCard.name + ' of ' + newCard.suit + '.';
        return newCard;
    }
}
