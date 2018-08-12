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


const calculateHandTotal = () => {
    //iterate over hand, reduce values of all items
    //how do you .reduce on a key on an array of objects?
    //should this include the logic for ace's value = 1 || 11?
};

const hitHand = () => {
    //playerHand.push(deckValues[Math.random(0-12)])
    //conditionals based on calculateHandTotal
    //if > 21, return YOU LOSE!
};
const standHand = () => {
    //dealerHand.push(deckValues[Math.random(0-12)])
    //conditionals based on calculateHandTotal
    //if <=16, repeat standHand (Recursion?)
    //if playerHand total > dealerHand total, return YOU WIN!
    //else return YOU LOSE!
};

const renderCardImage = () => {
    //iterate over hand (map or forEach)
    //insert png based on item in array's value key
    //value will select randomized suit card
    //how to make sure there are no duplicate cards already rendered?? idk
};

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