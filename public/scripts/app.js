'use strict';

console.log('script.js is running!');

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
