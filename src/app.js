console.log('script.js is running!')

const dealerTemplate = (
    <div>
        <h1>This is the dealer template</h1>
        <p>This is some text</p>
    </div>
);
const dealerRoot = document.getElementById('dealer');

const playerTemplate = (
    <div>
        <h1>This is the player one template</h1>
        <p>This is some more text</p>
    </div>
);
const playerRoot = document.getElementById('player');

ReactDOM.render(dealerTemplate, dealerRoot);
ReactDOM.render(playerTemplate, playerRoot);