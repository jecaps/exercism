/*
Instructions
Elyse, magician-to-be, continues her training. She will be given a deck of cards and attempt to transform that deck. She will make certain cards appear, 
disappear, change their values, or completely rearrange themselves. To make things easier, she usually only starts with cards numbered 1 to 10, although 
some of the tricks may result in larger cards being created.
*/

/*
Task 1 Double every single card

Elyse wants to double the number of every card in the deck. This may result in higher cards than 1-10
*/
function seeingDouble(deck) {
  return deck.map((card) => card * 2);
}

/*
Task 2 Create multiple copies of every 3 found in the deck

Elyse wants to triplicate every 3 found in the deck. If a deck started with a single 3, after the trick the deck would have three 3's in place of the 
original.
*/
function threeOfEachThree(deck) {
  return deck.reduce((stack, card) => {
    card == 3 ? stack.push(3, 3, 3) : stack.push(card);
    return stack;
  }, []);
}

/*
Task 3 Find two cards from the exact middle of the deck

Elyse will take a deck of ten cards, and make every card disappear except the middle two cards.
*/
function middleTwo(deck) {
  let midOfDeck = deck.length / 2 - 1let;
  return deck.splice(midOfDeck, 2);
  // return deck.slice(midOfDeck - 1, midOfDeck + 1)
}

/*
Task 4 The outside two cards will reappear in the middle of the deck

Elyse wants to move the top and bottom cards of the deck into the middle, in reverse order.

You can assume that the deck has an even number of cards.
*/
function sandwichTrick(deck) {
  let midOfDeck = deck.length / 2 - 1;
  deck.splice(midOfDeck, 0, deck.pop(), deck.shift());
  return deck;
}

/* 
Task 5 Every card that isn't 2 disappears

Elyse's favorite number today is 2. In this trick, every card that isn't a 2 will disappear from the deck.
*/ 
function twoIsSpecial(deck) {
  return deck.filter((value) => value === 2);
}

/*
Task 6 Convert a shuffled deck into a perfectly ordered deck

Elyse wishes to demonstrate her mastery of reordering the cards perfectly - no matter how well shuffled.
*/ 
function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}

/*
Task 7 Reorder the deck 

Elyse wants to change the order of the cards in the deck. After the trick, the card that is currently at the top should end up at the bottom of the deck. 
The second card should end up second last etc.
*/ 
function reorder(deck) {
  return deck.reverse();
}