console.log('the NEW app.js is running!')

//declare game status and message and global variables
let gameStatus = 'finished';
let gameMessage = 'Click New Game to Start';
let deckValues = [];
let dealerHand = [];
let playerHand = [];

//function to refresh the deck values after they have been spliced during a game
//an array of 52 objects with three keys: card, value, and img src
const refreshDeck = () => {
    deckValues = [
        {
            card: 'ace of clubs',
            value: 11,
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
            value: 11,
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
            value: 11,
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
            value: 11,
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

//initiateGame function to be run on New Game button click
//changes message and status
//resets many of the global values (in case you click it after playing a game)
//set up dealer and player hands and renders app
const initiateGame = () => {
    gameStatus = 'playing';
    gameMessage = 'Game in Progress';
    deckValues = [];
    dealerHand = [];
    playerHand = [];
    refreshDeck();
    addOneCard(playerHand);
    addOneCard(playerHand);
    addOneCard(dealerHand);
    renderApp();
}

const printCardsInHand = (hand) => {
//only run if the user has clicked New Game, thus hand length is greater than 0
    if (hand.length > 0) {
        let cardsInHand = [];
        for (let i = 0; i < hand.length; i++) {
            cardsInHand.push(hand[i].card);
        //change this line to return nested JSX elements to render directly to DOM
        }
        return cardsInHand;
    } else {
        return `Hand is empty!`;
    }
};

const renderCardImages = () => {
    //iterate over objects in the hand array and inject src img into JSX
    //create an <img src=""></img> item that is pushed into JSX each time you addOneCard?
    //remember to resize the images before you render them!
};

const calculateTotalValue = (hand) => {
//only run if the user has clicked New Game, thus hand length is greater than 0
    if (hand.length > 0) {
        let valuesOfHand = [];
//iterates over array and pulls numbers from value of object, pushes into new array
        for (let i = 0; i < hand.length; i++) {
            valuesOfHand.push(hand[i].value);
        }
//reduce new array to find total value of hand
        return valuesOfHand.reduce((a,b) => a+b);
//else (if length of hand is !>0), return 0
    } else {
        return 0;
    }
};

//handles the rule in blackjack that an ace can be 11 || 1
const checkAce = (hand) => {
//find first index of an object (card) whose value===11 (ace default value===11)
    const isThereAnAce = ( card => card.value===11 );
//if the total value of the hand is greater than 21 && an ace exists at an index (>=0)
    if (calculateTotalValue(hand) > 21 && hand.findIndex(isThereAnAce) >= 0) {
//then hand[at that index]'s value should reassigned to === 1
        hand[hand.findIndex(isThereAnAce)].value = 1;
    }
};

const pushRandomCard = (hand) => {
//splices object at random index of deckValues (so there are no card repeats), and pushes to hand
    hand.push(deckValues.splice(Math.floor(Math.random() * deckValues.length), 1)[0]);
}

const addOneCard = (hand) => {
//calls both pushRandomCard and checkAce to evaluate ace value before rendering app
    pushRandomCard(hand);
    checkAce(hand);
};

const checkBust = () => {
//conditional logic to check if pressing hit resulted in a bust, thereby finishing game
    if (calculateTotalValue(playerHand) > 21) {
        gameStatus = 'finished';
        gameMessage = 'Bust! You lose.'
    };
};

const evaluateGameStatus = () => {
//conditional logic to be run after stand finishes
//finishes the game and reassigns game message
    if (calculateTotalValue(dealerHand) > 21 || calculateTotalValue(dealerHand) < calculateTotalValue(playerHand)) {
        gameStatus = 'finished';
        gameMessage = 'You win! Congratulations!';
    } else if (calculateTotalValue(dealerHand) > calculateTotalValue(playerHand)) {
        gameStatus = 'finished';
        gameMessage = 'You lose!';
    } else {
        gameStatus = 'finished';
        gameMessage = 'It\'s a draw!';
    }
};

const hitHand = () => {
//if there is no bust, clicking hit adds a card, checks for bust, and renders app
    if (calculateTotalValue(playerHand) < 21) {
        addOneCard(playerHand);
        checkBust();
        renderApp();
    }; 
};

const standHand = () => {
//while the value of dealer hand is <=16, dealer continues adding cards to hand
    while (calculateTotalValue(dealerHand) <= 16) {
        addOneCard(dealerHand);
        //add time delay betwen each addOneCard?
        //setInterval and setTimeout doesn't work
    }
//evaluate game status and render app when while loop ceases
    evaluateGameStatus();
    renderApp();
};

//declaring root to attach JSX components
const dealerRoot = document.getElementById('dealer');
const playerRoot = document.getElementById('player');

//React JSX components
const renderApp = () => {
    const dealerTemplate = (
        <div>
            <h1>{gameMessage}</h1>
            <button id="play-button" className="button" onClick={initiateGame}>New Game</button>
            <div className="card-images">'{renderCardImages(dealerHand)}'</div>
            <h2>Dealer Hand: {printCardsInHand(dealerHand)}</h2>
            <p>Total Value: {calculateTotalValue(dealerHand)}</p>
        </div>
    );

    const playerTemplate = (
        <div>
            <div className="card-images">'{renderCardImages(dealerHand)}'</div>
            <h2>Your Hand: {printCardsInHand(playerHand)}</h2>
            <p>Total Value: {calculateTotalValue(playerHand)}</p>
            <button disabled={gameStatus==='finished'} id="hit-button" className="button" onClick={hitHand}>Hit!</button>
            <button disabled={gameStatus==='finished'} id="stand-button" className="button" onClick={standHand}>Stand!</button>
        </div>
    );

    ReactDOM.render(dealerTemplate, dealerRoot);
    ReactDOM.render(playerTemplate, playerRoot);
};

renderApp();