//declare game status and message and global variables
let gameStatus = 'ready';
let gameMessage = 'Click Play to Start';
let deckValues = [];
let dealerHand = [];
let playerHand = [];
let dealerScore = 0;
let playerScore = 0;

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

//resets game status, deckValues, and hands, to values on startup
const resetGame = () => {
    gameStatus = 'ready';
    gameMessage = 'Click Play to Start';
    
    deckValues = [];
    dealerHand = [];
    playerHand = [];
    renderApp();
}

//initiates game, refreshes deckValues, and populates hands
const initiateGame = () => {
    gameStatus = 'playing';
    gameMessage = 'Game in Progress';

    refreshDeck();
    addOneCard(playerHand);
    addOneCard(playerHand);
    addOneCard(dealerHand);
    renderApp();
}

const printCardValues = (hand) => {
//only run if player has initiated game
    if (hand.length > 0) {
//create empty array for individual card values
        let cardValues = [];
//loop over hand array and push values into cardValues array
        for (let i = 0; i < hand.length; i++) {
            cardValues.push(hand[i].value);
        }
//return string of values joined by comma to render to DOM
        return cardValues.join(', ');
    } else {
        return '?';
    }
};

const renderCardImages = (hand) => {
//if hand length is 1 (ie. dealer at the beginning of the game), return array with first card face and card back
    if (hand.length === 1) {
        return [<img src={`${hand[0].src}`} className="card-img"/>, <img src={`images/cards/red_back.png`} className="card-img"/>];
    } else if (hand.length > 0) {
//else if hand length is greater than 0, create empty cardImages array
        let cardImages = [];
//loop over hand and push image sources into cardImages array
        for (let i = 0; i < hand.length; i++) {
            cardImages.push(hand[i].src);
        }
//return new mapped array with each image source in image tag to render to DOM
        return cardImages.map(imgSrc => <img src={`${imgSrc}`} className="card-img"/>);
    } else {
//all other cases, (before you start playing) return an array with two card backs
        return [<img src={`images/cards/red_back.png`} className="card-img"/>, <img src={`images/cards/red_back.png`} className="card-img"/>];
    }
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
        return '?';
    }
};

//find first index of an object (card) whose value===11 (ace default value===11)
const isThereAnAce = ( card => card.value===11 );

//handles the rule in blackjack that an ace can be 11 || 1
const checkAce = (hand) => {
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

const dealerWin = () => {
    dealerScore++;
};

const playerWin = () => {
    playerScore++;
}

const checkBust = () => {
//conditional logic to check if pressing hit resulted in a bust, thereby finishing game
    if (calculateTotalValue(playerHand) > 21) {
        gameStatus = 'finished';
        gameMessage = ['Bust! You lose. ', <i class="fas fa-sad-cry"></i>];
        dealerWin();
    };
};

const evaluateGameStatus = () => {
//conditional logic to be run after stand finishes
//finishes the game and reassigns game message
    if (calculateTotalValue(dealerHand) > 21 || calculateTotalValue(dealerHand) < calculateTotalValue(playerHand)) {
        gameStatus = 'finished';
        gameMessage = [<i class="fas fa-grin-stars"></i>, ' You win! Congrats! ', <i class="fas fa-trophy"></i>];
        playerWin();
    } else if (calculateTotalValue(dealerHand) > calculateTotalValue(playerHand)) {
        gameStatus = 'finished';
        gameMessage = ['You lose! ', <i class="fas fa-sad-tear"></i>];
        dealerWin();
    } else {
        gameStatus = 'finished';
        gameMessage = ['It\'s a draw! ', <i class="fas fa-grin-tongue-wink"></i>];
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
//recursive function runs standHand again if dealer hand is <=16 or <21 and contains and ace
    if (calculateTotalValue(dealerHand) <= 16 ||
    (calculateTotalValue(dealerHand) < 21 && dealerHand.findIndex(isThereAnAce) >= 0)) {
        addOneCard(dealerHand);
        renderApp();
//timeout to wait one second between adding cards
        setTimeout(standHand, 1000);
    } else {
//after dealerHand does not satisfy conditionals, it evaluates the game status and renders app again
        evaluateGameStatus();
        renderApp();
    }
};

//declaring root to attach JSX components
const dealerRoot = document.getElementById('dealer');
const playerRoot = document.getElementById('player');

//React JSX components
const renderApp = () => {
    const dealerTemplate = (
        <div>

            <h2>dealer {dealerScore} : {playerScore} you</h2>
            <div className="ui">
                <h1>{gameMessage}</h1>
                <button className="button" onClick={resetGame}>Reshuffle</button>
                <button disabled={gameStatus==='playing' || gameStatus==='finished'} className="button" onClick={initiateGame}>Play?</button>
            </div>
            
            <div className="card-div">
                <h2>Dealer Hand Total: {calculateTotalValue(dealerHand)}</h2>
                {renderCardImages(dealerHand)}
                <p>Card Values: {printCardValues(dealerHand)}</p>
            </div>
          
        </div>
    );

    const playerTemplate = (
        <div>

            <div className="card-div">
                <h2>Your Hand Total: {calculateTotalValue(playerHand)}</h2>
                {renderCardImages(playerHand)}
                <p>Card Values: {printCardValues(playerHand)}</p>
            </div>

            <div className="ui">
                <button disabled={gameStatus==='finished' || gameStatus==='ready' } className="button" onClick={hitHand}>Hit!</button>
                <button disabled={gameStatus==='finished' || gameStatus==='ready' } className="button" onClick={standHand}>Stand!</button>
            </div>

        </div>
    );

    ReactDOM.render(dealerTemplate, dealerRoot);
    ReactDOM.render(playerTemplate, playerRoot);
};

renderApp();