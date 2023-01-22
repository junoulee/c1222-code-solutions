console.log('Lodash is loaded:', typeof _ !== 'undefined');
var deck = [];
var suits = ['clubs', 'diamonds', 'hearts', 'hearts'];
var values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
var players = [{ name: 'player 1', hand: [] }, { name: 'player 2', hand: [] }, { name: 'player 3', hand: [] }, { name: 'player 4', hand: [] }];

function cardDeck() {

  for (var i = 0; i < suits.length; i++) {
    for (var x = 0; x < values.length; x++) {
      var card = { rank: values[x], suit: suits[i] };
      deck.push(card);
    }
  }
  shuffle();
  return deck;

}

function shuffle() {

  for (var i = 0; i < 1000; i++) {
    var locationOne = Math.floor((Math.random() * deck.length));
    var locationTwo = Math.floor((Math.random() * deck.length));
    var temp = deck[locationOne];

    deck[locationOne] = deck[locationTwo];
    deck[locationTwo] = temp;
  }

}

function dealer() {
  shuffle();
  for (var i = 0; i < 2; i++) {

    for (i = 0; i < players.length; i++) {
      var card = deck.pop();
      if (card.rank === 'J' || card.rank === 'Q' || card.rank === 'K') {
        card.rank = 10;
      }
      if (card.rank === 'A') {
        card.rank = 11;
      }
      players[i].hand.push(card);
    }
  }
}
cardDeck();
dealer();
dealer();

function winner() {
  var playerScores = [];
  var scoreBoard = [];

  for (var i = 0; i < players.length; i++) {
    playerScores.push([(players[i].hand[0].rank + players[i].hand[1].rank)]);
    scoreBoard.push([(players[i].hand[0].rank + players[i].hand[1].rank)]);
  }

  scoreBoard = scoreBoard.flat();
  var winner = Math.max(...playerScores);
  playerScores = playerScores.flat();
  var index = playerScores.indexOf(winner);
  playerScores.splice(index, 1, 0);

  for (i = 0; i < playerScores.length; i++) {
    var winnerTwo = Math.max(...playerScores);
    var indexTwo = playerScores.indexOf(winnerTwo);
  }
  if (winner === winnerTwo) {
    console.log('Winner: player ' + (index + 1), 'score: ' + winner, ', player ' + (indexTwo + 1), 'score: ' + winnerTwo, scoreBoard);
  } else { console.log('Winner: player ' + (index + 1), 'score: ' + winner, scoreBoard); }
}
winner();
