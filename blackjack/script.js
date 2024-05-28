let playerFirstCard = getRandomCard();
let playerSecondCard = getRandomCard();
let sum = playerFirstCard + playerSecondCard;
let dealerQue = "";
let hand = [playerFirstCard, playerSecondCard];
let inGame = false;

function getRandomCard() {
  let RandomCard = Math.floor(Math.random() * 13) + 1;
  if (RandomCard >= 11) {
    return 10;
  } else if (RandomCard === 1) {
    return 11;
  } else {
    return RandomCard;
  }
}

function startGame() {
  inGame = true;
  let playerFirstCard = getRandomCard();
  let playerSecondCard = getRandomCard();
  hand = [playerFirstCard, playerSecondCard];
  sum = playerFirstCard + playerSecondCard;
  checkState();
}

function checkState() {
  if (sum > 21) {
    dealerQue = "Game Over!";
    inGame = false;
  } else if (sum === 21) {
    dealerQue = "BLACKJACK! YOU WON!";
    inGame = false;
  } else {
    dealerQue = "Draw another card?!";
    inGame = true;
  }
  document.getElementById("sum-el").innerText = sum;
  document.getElementById("message-el").innerText = dealerQue;
  document.getElementById("hand-el").innerText = hand;
}

function newCard() {
  checkState();

  if (inGame === true) {
    let i = getRandomCard();
    sum += i;
    hand.push(i);
    checkState();
  } else {
  }
}
