/*
Instructions
Elyse, magician-to-be, continues her training. She has a deck of cards she wants to manipulate.

To make things easier, she usually only starts with cards numbered 1 to 10, although some of the tricks may involve additional cards.
*/

/*
Task 1 Get the first card 

Elyse will summon the first card in the deck without using the array[index] or .shift(). It's just like magic.
*/
function getFirstCard(deck) {
  const [firstCard, ...restOfDeck] = deck;
  return firstCard;
}

/*
Task 2 Get the second card

Elyse performs sleight of hand and summons the second card in the deck without using array[index].
*/
function getSecondCard(deck) {
  const [firstCard, secondCard, ...restOfDeck] = deck;
  return secondCard;
}

/*
Task 3 Swap the first two cards 

Elysse will make the top two cards of the deck switch places. She doesn't need to call a single function
*/
function swapTopTwoCards(deck) {
  const [firstCard, secondCard, ...restOfDeck] = deck;
  return [secondCard, firstCard, ...restOfDeck];
}

/*
Task 4 Discard the top card 

Elyse will separate the deck into two piles. The first pile will contain only the top card of the originial deck, while the second 
pile will contain all the other cards.
*/
function discardTopCard(deck) {
  const [firstCard, ...restOfDeck] = deck;
  return [firstCard, [...restOfDeck]];
}

/*
Task 5 Inset face cards

Elyse will insert a set of face cards (i.e. jack, queen, and king) into her deck such that they become the second, third, and fourth cards, respectively.
*/
const FACE_CARDS = ["jack", "queen", "king"];

function insertFaceCards(deck) {
  const [firstCard, ...restOfDeck] = deck;
  return [firstCard, ...FACE_CARDS, ...restOfDeck];
}
