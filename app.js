'use strict'

let cardType = ['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2];
let cardSuit = ['Diamond', 'Hearts', 'Clubs', 'Spades'];
let deck = [];

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

populateDeck(cardType, cardSuit);
