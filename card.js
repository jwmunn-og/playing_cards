class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  outputCard () {
    console.log(`${this.rank} of ${this.suit}`);
  }
}
const card = new Card(9, "diamonds");

card.outputCard();