'use strict';

console.log('app.js is running!');

var playerHand = [{
    card: 'ace',
    value: 1 || 11
}, {
    card: 'two',
    value: 2
}, {
    card: 'three',
    value: 3
}];
var dealerHand = [{
    card: 'six',
    value: 6
}, {
    card: 'seven',
    value: 7
}];

var accessCardsInHand = function accessCardsInHand(hand) {
    var cardsInHandArr = [];
    for (var i = 0; i < hand.length; i++) {
        cardsInHandArr.push(hand[i].card);
    }
    return cardsInHandArr;
};

var deckValues = [{
    card: 'ace',
    value: 1 || 11
}, {
    card: 'two',
    value: 2
}, {
    card: 'three',
    value: 3
}, {
    card: 'four',
    value: 4
}, {
    card: 'five',
    value: 5
}, {
    card: 'six',
    value: 6
}, {
    card: 'seven',
    value: 7
}, {
    card: 'eight',
    value: 8
}, {
    card: 'nine',
    value: 9
}, {
    card: 'ten',
    value: 10
}, {
    card: 'jack',
    value: 10
}, {
    card: 'queen',
    value: 10
}, {
    card: 'king',
    value: 10
}];

var calculateHandTotal = function calculateHandTotal() {
    //iterate over hand, reduce values of all items
    //how do you .reduce on a key on an array of objects?
    //should this include the logic for ace's value = 1 || 11?
};

var hitHand = function hitHand() {
    //playerHand.push(deckValues[Math.random(0-12)])
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
        'This is some text'
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
        'This is some more text'
    )
);
var playerRoot = document.getElementById('player');

var renderApp = function renderApp() {
    ReactDOM.render(dealerTemplate, dealerRoot);
    ReactDOM.render(playerTemplate, playerRoot);
};

renderApp();
