/*
Instructions

Your design company has primarily been working with CSS transformations to build Web pages. After some discussion, a decision is made to start using
JavaScript to perform some calculations dynamically. Some of your teammates are less experienced with JavaScript, so you decide to use a function closure
to create reusable transformation for {x, y} coordinate pairs. 
*/

/*
Task 1 Translate Coordinates

Implement the translate2d function that returns a function making use of a closure to perform a repeatable 2d translation of a coordinate pair.
*/
function translate2d(dx, dy) {
  return (x, y) => [dx + x, dy + y];
}

/*
Task 2 Implement the scale2d function that returns a function making use of a closure to perform a repeatable 2d scale of a coordinate pair.

For this exercise, assume only positive scaling values.
*/
function scale2d(sx, sy) {
  return (x, y) => [sx * x, sy * y];
}

/*
Task 3 Compose transformation functions

Combine two transformation functions to perform a repeatable transformation. This is often called function composition, where the result of the
first function 'f(x)' is used as the input to the second function 'g(x)'
*/
function composeTransform(f, g) {
  return (x, y) => g(...f(x, y));
}

/*
Task 4 Save the results of functions

Implement the memoizeTransform function. It takes a function to memoize, then returns a new function that remembers the inputs to the supplied function
so that the last return value can be "remembered" and only calculated once if it is called again with the same arguments.

Memoizing is sometimes used in dynamic programming. It allows for expensive operations to be done only once since their results are remembered. Note that
in this exercise only the last result is remembered, unlike some solutions in dynamic programming that memoize all the results.
*/
function memoizeTransform(f) {
  let prevX, prevY, prevResult;
  return (x, y) => {
    if (x !== prevX || y !== prevY) {
      [prevX, prevY, prevResult] = [x, y, f(x, y)];
    }
    return prevResult;
  };
}
