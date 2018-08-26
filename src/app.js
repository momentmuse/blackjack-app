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
    return [
        [11, 'AC'],
        [2, '2C'],
        [3, '3C'],
        [4, '4C'],
        [5, '5C'],
        [6, '6C'],
        [7, '7C'],
        [8, '8C'],
        [9, '9C'],
        [10, '10C'],
        [10, 'JC'],
        [10, 'QC'],
        [10, 'KC'],

        [11, 'AH'],
        [2, '2H'],
        [3, '3H'],
        [4, '4H'],
        [5, '5H'],
        [6, '6H'],
        [7, '7H'],
        [8, '8H'],
        [9, '9H'],
        [10, '10H'],
        [10, 'JH'],
        [10, 'QH'],
        [10, 'KH'],

        [11, 'AS'],
        [2, '2S'],
        [3, '3S'],
        [4, '4S'],
        [5, '5S'],
        [6, '6S'],
        [7, '7S'],
        [8, '8S'],
        [9, '9S'],
        [10, '10S'],
        [10, 'JS'],
        [10, 'QS'],
        [10, 'KS'],

        [11, 'AD'],
        [2, '2D'],
        [3, '3D'],
        [4, '4D'],
        [5, '5D'],
        [6, '6D'],
        [7, '7D'],
        [8, '8D'],
        [9, '9D'],
        [10, '10D'],
        [10, 'JD'],
        [10, 'QD'],
        [10, 'KD']
    ].map((card) => {
        return {
                value: card[0],
                src: `images/cards/${card[1]}.png`
                }
    });
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