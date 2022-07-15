/*
Instructions
Your friend Kojo is a big fan of numbers. He has a small website for playing around with numbers: www.fun-with-numbers.com. 
Kojo is not that good at programming so he asked you for help.

You will build two helper functions for new number games on Kojos' website and a third one to validate some input the user 
can enter.
*/

/*
Task 1 Calculate the sum for the numbers on the slot machine
*/
function twoSum(array1, array2) {
  let num1 = Number(array1.join(""));
  let num2 = Number(array2.join(""));
  return num1 + num2;
}

/*
Take 2 Calculate the sum for the numbers on the slot machine

One of the games on Kojos' website looks like a slot machine that shows two groups of wheels with digits on them. Each group of 
digits represents a number. For the game mechanics, Kojo needs to know the sum of those two numbers.

Write a function twoSum that accepts two arrays as parameters. Each array consists of one or more numbers between 0 and 9. The 
function should interpret each array as a number and return the sum of those two numbers.
*/
function luckyNumber(value) {
  let reversedValue = String(value).split("").reverse().join("");
  return value === Number(reversedValue);
}

/*
Task 3 Generate an error message for invalid user input 

In various places on the website, there are input fields where the users can enter numbers and click a button to trigger some 
action. Kojo wants to improve the user experience of his site. He wants to show an error message in case the user clicks the 
button but the field contains an invalid input value.

Here is some more information on how the value of an input field is provided.

If the user types something into a field, the associated value is always a string even if the user only typed in numbers.
If the user types something but deletes it again, the variable will be an empty string.
Before the user even started typing, the variable can be undefined or null.
Write a function errorMessage that accepts the user input as a parameter. If the user did not provide any input, errorMessage 
should return 'Required field'. If the input does not represent a non-zero number (according to the JavaScript conversion rules), 
'Must be a number besides 0' should be returned. In all other cases, you can assume the input is valid, the return value should 
be an empty string.
*/
function errorMessage(input) {
  let num = Number(input);
  return !Boolean(input)
    ? "Required field"
    : !num
    ? "Must be a number besides 0"
    : "";
}
