/*
Instructions
As a budding magician, Elyse needs to analyze her deck in lots of different ways. To keep things simple, she only uses cards with values 1-10.
*/

/*
Task 1 Determine how many cards of a certain type are in the deck

Elyse wants to know how many cards of a particular type she has in her deck.

Write a function cardTypeCheck that takes two parameters: an array of cards (Elyse's deck) and the type of card to count. The function should
should use forEach and return the number of cards in the deck of the specified type.
*/
function cardTypeCheck(stack, card) {
  const counts = {};
  stack.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  return counts[card] || 0;
}

/*
Task 2 Determine how many odd or even cards there are 

For another trick, Elyse needs to know how many odd or even cards there are in her deck.

Implement a function determineOddEvenCards that takes two parameters: an array of cards (Elyse's deck), and a boolean (true is analogous to 'even',
an false is analogous to 'odd').

This function should return a single number: the number of odd or even cards there are (depending in the value of the second argument) in the deck.
To practice, use a for...of loop in the function implementation this time.
*/
function determineOddEvenCards(stack, type) {
  let oddNumCount = 0;
  let evenNumCount = 0;

  for (let card of stack) {
    card % 2 !== 0 ? oddNumCount++ : evenNumCount++;
  }

  return type ? evenNumCount : oddNumCount;
}
