class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  outputCard () {
    console.log(`${this.rank} of ${this.suit}`);
  }
}

class Deck {
  constructor() {
    const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
    const suits = ["spades", "clubs", "hearts", "diamonds"];
    this.cards = [];

    ranks.forEach( (rank) => {
      suits.forEach( (suit) => {
        const card = new Card(rank, suit);
        this.cards.push(card);
      });
    });
  }
}

const deck = new Deck();

console.log(deck);