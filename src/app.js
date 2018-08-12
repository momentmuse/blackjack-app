console.log('app.js is running!')

const playerHand = [];
const dealerHand = [];

const deckValues = [
    {
        card: 'ace',
        value: 1 || 11
    },
    {
        card: 'two',
        value: 2
    },
    {
        card: 'three',
        value: 3
    },
    {
        card: 'four',
        value: 4
    },
    {
        card: 'five',
        value: 5
    },
    {
        card: 'six',
        value: 6
    },
    {
        card: 'seven',
        value: 7
    },
    {
        card: 'eight',
        value: 8
    },
    {
        card: 'nine',
        value: 9
    },
    {
        card: 'ten',
        value: 10
    },
    {
        card: 'jack',
        value: 10
    },
    {
        card: 'queen',
        value: 10
    },
    {
        card: 'king',
        value: 10
    }
];


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


const renderApp = () => {};