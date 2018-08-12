'use strict';

console.log('app.js is running!');

var playerHand = [];
var dealerHand = [];

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

var dealerTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This is the dealer template'
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
        'This is the player one template'
    ),
    React.createElement(
        'p',
        null,
        'This is some more text'
    )
);
var playerRoot = document.getElementById('player');

ReactDOM.render(dealerTemplate, dealerRoot);
ReactDOM.render(playerTemplate, playerRoot);

var renderApp = function renderApp() {};
