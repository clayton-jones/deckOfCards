let cardType = ['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2];
let cardSuit = ['Diamond', 'Hearts', 'Clubs', 'Spades'];
let deck = [];

// Create initial deck of careds
populateDeck = (type, suit) => {
    let card = {
        name: '',
        suit: ''
    };

    for (let i = 0; i < type.length(); i++) {
        for (let j = 0; j < suit.length(); j++) {
            card.name = type[i];
            card.suit = suit[j];
            deck.push(card);
        }
    }
}
populateDeck(cardType, cardSuit);