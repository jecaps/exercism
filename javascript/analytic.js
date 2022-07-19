/*
Instructions
Elyse, magician-to-be, continues her training. She will be given several stacks of cards that she needs to perform her tricks. To make things a bit 
easier, she only uses the cards 1 to 10.

In this exercise, use built-in methods to analyse the contents of an array.
*/

/*
Task 1 Find the position (index) of a card in the stack.
*/
function getCardPosition(stack, card) {
  return stack.indexOf(card);
}

/*
Determine if a card is present 

Elyse wants to determine if a card is present in the stack -- in other words, if the stack contains a specific number.
*/
function doesStackIncludeCard(stack, card) {
  return stack.includes(card);
}

/*
Task 3 Determine if each card is even

Elyse wants to know if every card is even -- in other words, if each number in the stack is an even number.
*/
function isEachCardEven(stack) {
  return stack.every((card) => card % 2 === 0);
}

/*
Task 4 Check if the stack contains an odd-value card

Elyse wants to know if there is an odd number in the stack.
*/
function doesStackIncludeOddCard(stack) {
  return stack.some((card) => card % 2 !== 0);
}

/*
Task 5 Get the first odd card from the stack

Elyse wants to know the value of the first card that is odd.
*/
function getFirstOddCard(stack) {
  return stack.find((card) => card % 2 !== 0);
}

/*
Task 6 Determine the position of the first card that is even

Elyse wants to know the position of the first card that is even.
*/
function getFirstEvenCardPosition(stack) {
  return stack.findIndex((card) => card % 2 === 0);
}
