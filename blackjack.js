// Variables
const COLOURS = {
    HEART: '#FF0000',
    DIAMOND: '#FF0000',
    SPADE: '#000000',
    CLUB: '#000000'
};

const SUITS = [
    { name: 'HEART', code: 'H' },
    { name: 'DIAMOND', code: 'D' },
    { name: 'CLUB', code: 'C' },
    { name: 'SPADE', code: 'S' }];

const DECK = R.flatten(SUITS.map((suit) => [
    { suit, name: '2', value: 2 },
    { suit, name: '3', value: 3 },
    { suit, name: '4', value: 4 },
    { suit, name: '5', value: 5 },
    { suit, name: '6', value: 6 },
    { suit, name: '7', value: 7 },
    { suit, name: '8', value: 8 },
    { suit, name: '9', value: 9 },
    { suit, name: '10', value: 10 },
    { suit, name: 'J', value: 10 },
    { suit, name: 'Q', value: 10 },
    { suit, name: 'K', value: 10 },
    { suit, name: 'A', value: 11 }]));

const GOAL = 21;

const SHUFFLES = 3;

// Fisher-Yates Shuffle
function shuffle (a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}




function pointsOfPlayer (blackjack, playerIndex) {

    return blackjack
            .players[playerIndex]
            .cards
            .reduce((total, cardContainer) => total + cardContainer.card.value, 0);

}

function giveCardToPlayer (blackjack, whichPlayer) {
    const player = blackjack.players[whichPlayer];

    const card = blackjack.deck.pop();

    console.log(`Gave card ${card.name}${card.suit.code} to player with index ${whichPlayer}`);

    player.cards.push({ visible: true, card });

    return blackjack;
}

// TODO: set or shift the dealer
function Blackjack (amountOfPlayers) {

    // Shuffle fresh deck.

    let deck = DECK.slice();

    for (let i = 0; i < SHUFFLES; i++) {
        deck = shuffle(deck);
    }

    const players = [];
    for (let i = 0; i < amountOfPlayers; i++) {
        players.push({
            name: 'Player '+(i+1),
            cards: []
        });
    }

    // Deal two cards, one visible, one hidden
    // Visible
    players.forEach((player) => {
       player.cards.push({
           visible: true,
           card: deck.pop()
       });
    });

    players.forEach((player) => {
        player.cards.push({
            visible: true,
            card: deck.pop()
        });
    });
players[0].cards[1].visible = false
    // Hidden

    return { deck, players };
}
