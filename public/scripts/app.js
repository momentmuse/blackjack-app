'use strict';

console.log('app.js is running!');

var dealerTemplate = React.createElement(
  'p',
  null,
  'This is the dealer template'
);
var dealerRoot = document.getElementById('dealer');

var playerOneTemplate = React.createElement(
  'p',
  null,
  'This is the player one template!'
);
var playerOneRoot = document.getElementById('playerOne');

ReactDOM.render(dealerTemplate, dealerRoot);
ReactDOM.render(playerOneTemplate, playerOneRoot);
