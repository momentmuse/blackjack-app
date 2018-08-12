'use strict';

console.log('app.js is running!');

var dealerHand = [{
    card: 'six',
    value: 6
}, {
    card: 'seven',
    value: 7
}];

var playerHand = [{
    card: 'two',
    value: 2
}, {
    card: 'three',
    value: 3
}, {
    card: 'ten',
    value: 10
}];

var accessCardsInHand = function accessCardsInHand(hand) {
    var cardsInHandArr = [];
    for (var i = 0; i < hand.length; i++) {
        cardsInHandArr.push(hand[i].card);
    }
    return cardsInHandArr;
};

var deckValues = [{
    card: 'ace of clubs',
    value: 1 || 11
}, {
    card: 'two of clubs',
    value: 2
}, {
    card: 'three of clubs',
    value: 3
}, {
    card: 'four of clubs',
    value: 4
}, {
    card: 'five of clubs',
    value: 5
}, {
    card: 'six of clubs',
    value: 6
}, {
    card: 'seven of clubs',
    value: 7
}, {
    card: 'eight of clubs',
    value: 8
}, {
    card: 'nine of clubs',
    value: 9
}, {
    card: 'ten of clubs',
    value: 10
}, {
    card: 'jack of clubs',
    value: 10
}, {
    card: 'queen of clubs',
    value: 10
}, {
    card: 'king of clubs',
    value: 10
}, {
    card: 'ace of hearts',
    value: 1 || 11
}, {
    card: 'two of hearts',
    value: 2
}, {
    card: 'three of hearts',
    value: 3
}, {
    card: 'four of hearts',
    value: 4
}, {
    card: 'five of hearts',
    value: 5
}, {
    card: 'six of hearts',
    value: 6
}, {
    card: 'seven of hearts',
    value: 7
}, {
    card: 'eight of hearts',
    value: 8
}, {
    card: 'nine of hearts',
    value: 9
}, {
    card: 'ten of hearts',
    value: 10
}, {
    card: 'jack of hearts',
    value: 10
}, {
    card: 'queen of hearts',
    value: 10
}, {
    card: 'king of hearts',
    value: 10
}, {
    card: 'ace of spades',
    value: 1 || 11
}, {
    card: 'two of spades',
    value: 2
}, {
    card: 'three of spades',
    value: 3
}, {
    card: 'four of spades',
    value: 4
}, {
    card: 'five of spades',
    value: 5
}, {
    card: 'six of spades',
    value: 6
}, {
    card: 'seven of spades',
    value: 7
}, {
    card: 'eight of spades',
    value: 8
}, {
    card: 'nine of spades',
    value: 9
}, {
    card: 'ten of spades',
    value: 10
}, {
    card: 'jack of spades',
    value: 10
}, {
    card: 'queen of spades',
    value: 10
}, {
    card: 'king of spades',
    value: 10
}, {
    card: 'ace of diamonds',
    value: 1 || 11
}, {
    card: 'two of diamonds',
    value: 2
}, {
    card: 'three of diamonds',
    value: 3
}, {
    card: 'four of diamonds',
    value: 4
}, {
    card: 'five of diamonds',
    value: 5
}, {
    card: 'six of diamonds',
    value: 6
}, {
    card: 'seven of diamonds',
    value: 7
}, {
    card: 'eight of diamonds',
    value: 8
}, {
    card: 'nine of diamonds',
    value: 9
}, {
    card: 'ten of diamonds',
    value: 10
}, {
    card: 'jack of diamonds',
    value: 10
}, {
    card: 'queen of diamonds',
    value: 10
}, {
    card: 'king of diamonds',
    value: 10
    //note: you might have to populate the whole deck
    //instead of simply identifying and pushing into the player or dealer hand, it may be better to splice out of deckValues array and push into dealer or playerHand, because then that would represent the card probability more accurately
}];

var calculateHandTotal = function calculateHandTotal(hand) {
    var valueInHandArr = [];
    for (var i = 0; i < hand.length; i++) {
        valueInHandArr.push(hand[i].value);
    }
    return valueInHandArr.reduce(function (a, b) {
        return a + b;
    });
    //should this include the logic for ace's value = 1 || 11?
};

var hitHand = function hitHand() {
    playerHand.push(deckValues[Math.floor(Math.random() * 52)]);
    //conditionals based on calculateHandTotal
    //if > 21, return YOU LOSE!
};
var standHand = function standHand() {
    //dealerHand.push(deckValues[Math.random(0-12)])
    //conditionals based on calculateHandTotal
    //if <=16, repeat standHand (Recursion?)
    //if playerHand total > dealerHand total, return YOU WIN!
    //else return YOU LOSE!
};

var renderCardImage = function renderCardImage() {
    //iterate over hand (map or forEach)
    //insert png based on item in array's value key
    //value will select randomized suit card
    //how to make sure there are no duplicate cards already rendered?? idk
};

var dealerTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Dealer: ',
        accessCardsInHand(dealerHand)
    ),
    React.createElement(
        'p',
        null,
        'Total Value: ',
        calculateHandTotal(dealerHand)
    )
);
var dealerRoot = document.getElementById('dealer');

var playerTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Your Hand: ',
        accessCardsInHand(playerHand)
    ),
    React.createElement(
        'p',
        null,
        'Total Value: ',
        calculateHandTotal(playerHand)
    ),
    React.createElement(
        'button',
        { id: 'hit-button', className: 'button' },
        'Hit!'
    ),
    React.createElement(
        'button',
        { id: 'stand-button', className: 'button' },
        'Stand!'
    )
);
var playerRoot = document.getElementById('player');

var renderApp = function renderApp() {
    ReactDOM.render(dealerTemplate, dealerRoot);
    ReactDOM.render(playerTemplate, playerRoot);
};

renderApp();
