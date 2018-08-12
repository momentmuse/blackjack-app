console.log('script.js is running!')

const dealerTemplate = <p>This is the dealer template</p>;
const dealerRoot = document.getElementById('dealer');

const playerOneTemplate = <p>This is the player one template!</p>;
const playerOneRoot = document.getElementById('playerOne');

ReactDOM.render(dealerTemplate, dealerRoot);
ReactDOM.render(playerOneTemplate, playerOneRoot);