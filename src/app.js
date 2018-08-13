console.log('the NEW app.js is running!')

let deckValues = [];
let dealerHand = [];
let playerHand = [];

const refreshDeck = () => {
    deckValues = [
        {
            card: 'ace of clubs',
            value: 1 || 11,
            src: 'images/cards/AC.png'
        },
        {
            card: 'two of clubs',
            value: 2,
            src: 'images/cards/2C.png'
        },
        {
            card: 'three of clubs',
            value: 3,
            src: 'images/cards/3C.png'
        },
        {
            card: 'four of clubs',
            value: 4,
            src: 'images/cards/4C.png'
        },
        {
            card: 'five of clubs',
            value: 5,
            src: 'images/cards/5C.png'
        },
        {
            card: 'six of clubs',
            value: 6,
            src: 'images/cards/6C.png'
        },
        {
            card: 'seven of clubs',
            value: 7,
            src: 'images/cards/7C.png'
        },
        {
            card: 'eight of clubs',
            value: 8,
            src: 'images/cards/8C.png'
        },
        {
            card: 'nine of clubs',
            value: 9,
            src: 'images/cards/9C.png'
        },
        {
            card: 'ten of clubs',
            value: 10,
            src: 'images/cards/10C.png'
        },
        {
            card: 'jack of clubs',
            value: 10,
            src: 'images/cards/JC.png'
        },
        {
            card: 'queen of clubs',
            value: 10,
            src: 'images/cards/QC.png'
        },
        {
            card: 'king of clubs',
            value: 10,
            src: 'images/cards/KC.png'
        },
        {
            card: 'ace of hearts',
            value: 1 || 11,
            src: 'images/cards/AH.png'
        },
        {
            card: 'two of hearts',
            value: 2,
            src: 'images/cards/2H.png'
        },
        {
            card: 'three of hearts',
            value: 3,
            src: 'images/cards/3H.png'
        },
        {
            card: 'four of hearts',
            value: 4,
            src: 'images/cards/4H.png'
        },
        {
            card: 'five of hearts',
            value: 5,
            src: 'images/cards/5H.png'
        },
        {
            card: 'six of hearts',
            value: 6,
            src: 'images/cards/6H.png'
        },
        {
            card: 'seven of hearts',
            value: 7,
            src: 'images/cards/7H.png'
        },
        {
            card: 'eight of hearts',
            value: 8,
            src: 'images/cards/8H.png'
        },
        {
            card: 'nine of hearts',
            value: 9,
            src: 'images/cards/9H.png'
        },
        {
            card: 'ten of hearts',
            value: 10,
            src: 'images/cards/10H.png'
        },
        {
            card: 'jack of hearts',
            value: 10,
            src: 'images/cards/JH.png'
        },
        {
            card: 'queen of hearts',
            value: 10,
            src: 'images/cards/QH.png'
        },
        {
            card: 'king of hearts',
            value: 10,
            src: 'images/cards/KH.png'
        },
        {
            card: 'ace of spades',
            value: 1 || 11,
            src: 'images/cards/AS.png'
        },
        {
            card: 'two of spades',
            value: 2,
            src: 'images/cards/2S.png'
        },
        {
            card: 'three of spades',
            value: 3,
            src: 'images/cards/3S.png'
        },
        {
            card: 'four of spades',
            value: 4,
            src: 'images/cards/4S.png'
        },
        {
            card: 'five of spades',
            value: 5,
            src: 'images/cards/5S.png'
        },
        {
            card: 'six of spades',
            value: 6,
            src: 'images/cards/6S.png'
        },
        {
            card: 'seven of spades',
            value: 7,
            src: 'images/cards/7S.png'
        },
        {
            card: 'eight of spades',
            value: 8,
            src: 'images/cards/8S.png'
        },
        {
            card: 'nine of spades',
            value: 9,
            src: 'images/cards/9S.png'
        },
        {
            card: 'ten of spades',
            value: 10,
            src: 'images/cards/10S.png'
        },
        {
            card: 'jack of spades',
            value: 10,
            src: 'images/cards/JS.png'
        },
        {
            card: 'queen of spades',
            value: 10,
            src: 'images/cards/QS.png'
        },
        {
            card: 'king of spades',
            value: 10,
            src: 'images/cards/KS.png'
        },
        {
            card: 'ace of diamonds',
            value: 1 || 11,
            src: 'images/cards/AD.png'
        },
        {
            card: 'two of diamonds',
            value: 2,
            src: 'images/cards/2D.png'
        },
        {
            card: 'three of diamonds',
            value: 3,
            src: 'images/cards/3D.png'
        },
        {
            card: 'four of diamonds',
            value: 4,
            src: 'images/cards/4D.png'
        },
        {
            card: 'five of diamonds',
            value: 5,
            src: 'images/cards/5D.png'
        },
        {
            card: 'six of diamonds',
            value: 6,
            src: 'images/cards/6D.png'
        },
        {
            card: 'seven of diamonds',
            value: 7,
            src: 'images/cards/7D.png'
        },
        {
            card: 'eight of diamonds',
            value: 8,
            src: 'images/cards/8D.png'
        },
        {
            card: 'nine of diamonds',
            value: 9,
            src: 'images/cards/9D.png'
        },
        {
            card: 'ten of diamonds',
            value: 10,
            src: 'images/cards/10D.png'
        },
        {
            card: 'jack of diamonds',
            value: 10,
            src: 'images/cards/JD.png'
        },
        {
            card: 'queen of diamonds',
            value: 10,
            src: 'images/cards/QD.png'
        },
        {
            card: 'king of diamonds',
            value: 10,
            src: 'images/cards/KD.png'
        }
    ];
};

const initiateGame = () => {
        deckValues = [];
        dealerHand = [];
        playerHand = [];
        refreshDeck();
        addOneCard(playerHand);
        addOneCard(playerHand);
        addOneCard(dealerHand);
        renderApp();
        // evaluateGameStatus();
    }

const accessCardsInHand = (hand) => {
    if (hand.length > 0) {
        let cardsInHandArr = [];
        for (let i = 0; i < hand.length; i++) {
            cardsInHandArr.push(hand[i].card);
        }
        return cardsInHandArr;
    } else {
        return `Hand is empty!`
    }
};

const calculateHandTotal = (hand) => {
    if (hand.length > 0) {
        let valueInHandArr = [];
        for (let i = 0; i < hand.length; i++) {
            valueInHandArr.push(hand[i].value);
        }
        return valueInHandArr.reduce((a,b) => a+b);
    } else {
        return 0;
    }
    //should this include the logic for ace's value = 1 || 11?
};

const addOneCard = (hand) => {
    hand.push(deckValues.splice(Math.floor(Math.random() * 52), 1)[0]);
};

const hitHand = () => {
    addOneCard(playerHand);
    console.log(playerHand);
    renderApp();
};

const standHand = () => {
    while (calculateHandTotal(dealerHand) <= 16) {
        addOneCard(dealerHand);
        //add time delay betwen each addOneCard?
        //setInterval and setTimeout doesn't work
        renderApp();
    }
};

const dealerRoot = document.getElementById('dealer');
const playerRoot = document.getElementById('player');

const renderApp = () => {
    const dealerTemplate = (
        <div>
            <button id="play-button" className="button" onClick={initiateGame}>Play?</button>
            <h1>Dealer Hand: {accessCardsInHand(dealerHand)}</h1>
            <p>Total Value: {calculateHandTotal(dealerHand)}</p>
        </div>
    );

    const playerTemplate = (
        <div>
            <h1>Your Hand: {accessCardsInHand(playerHand)}</h1>
            <p>Total Value: {calculateHandTotal(playerHand)}</p>
            <button id="hit-button" className="button" onClick={hitHand}>Hit!</button>
            <button id="stand-button" className="button" onClick={standHand}>Stand!</button>
        </div>
    );

    ReactDOM.render(dealerTemplate, dealerRoot);
    ReactDOM.render(playerTemplate, playerRoot);
};


renderApp();