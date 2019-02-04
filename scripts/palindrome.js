
[42, 17, 85].forEach((element) => {
    // console.log(element + 1);
  });

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach((character) => {
  // console.log(character);
});



// For example, suppose we had an array of mixed-case strings,
// and we wanted to create a corresponding array of lower-case strings joined
// on a hyphen (making the result appropriate for use in URLs), like this:
// "North Dakota" -> "north-dakota"

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// urls: Imperative version
function imperativeUrls(el) {
  let urls = [];
  el.forEach((el) => {
    urls.push(el.toLowerCase().split(/\s+/).join('-'));
  })
  return urls;
}
// console.log(imperativeUrls(states));

// Completing the same exercise above using .map instead

[1, 2, 3, 4].map(function(n) { return n * n; });
// OR
[1, 2, 3, 4].map((n) => { return n * n; });
// OR
[1, 2, 3, 4].map(n => n * n);

// So lets convert the forEach function into a .map function

// urls: Functional version
// let functionalUrls = (el) => {
//   return el.map(el => el.toLowerCase().split(/\s+/).join('-'));
// }
// console.log(functionalUrls(states));

// As a final refinement, let’s factor the method chain responsible for making the strings URL-compatible into a separate auxiliary function called urlify

let urlify = (string) => {
  return 'https://example.com/' + string.toLowerCase().split(/\s+/).join('-');
}

let functionalUrls = (el) => {
  return el.map(el => urlify(el));
}
// console.log(functionalUrls(states));


// Suppose, for example, we wanted to start with the same states array
// defined in Section 6.1 and return a new array consisting of the strings
// that have only one word. This is exactly the kind of task that filter
// is good for, but as in Section 6.1 we’ll write an imperative version first.
// The steps are fairly straightforward:

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
// console.log(imperativeSingles(states));

// Using Filter
[1, 2, 3, 4, 5, 6, 7, 8].filter(n => n % 2 === 0);
[ 2, 4, 6, 8 ]

let functionalSingles = (el) => {
  return el.filter(el => el.split(/\s+/).length === 1);
}
// console.log(functionalSingles(states));


// Write two filter functions that return the Dakotas: one using String#includes
// (Section 2.5) to test for the presence of the string “Dakota” and one using a
// regex that tests for the length of the split array being 2.


let Doubles = (el) => {
  return el.filter(el => el.includes(' '));
}
// console.log(Doubles(states));

let functionalDoubles = (el) => {
  return el.filter(el => el.split(/\s+/).length === 2);
}
// console.log(functionalDoubles(states));


// Because reduce is particularly challenging, we’ll cover two examples: first, we’ll make iterative
// and functional versions of a sum operation on arrays of integers; second, we’ll make a plain
// JavaScript object (Section 4.4) that maps state names to the length of each name, with a
// result that will look like this:
// { "Kansas": 6,
//   "Nebraska": 8,
//   .
//   .
//   .
// }

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
// console.log(imperativeSum(numbers));

// now for the .reduce() version
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.reduce((total, n) => {
//     total += n;
//     return total;
//   }, 0);
// 55

function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
// console.log(functionalSum(numbers));



// To help reinforce reduce, let’s take a look at a second example. As mentioned above, our task is to
// make a plain object (associative array) with keys equal to the state names and values equal to their
// lengths (which could be useful for calculating, e.g., a histogram of word frequencies in a longer document).
// We can solve this imperatively by initializing a lengths object and then iterating through the states,
// setting lengths[state] equal to the corresponding length: lengths[state] = state.length;


// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));



let numList = [1, 2, 3, 4, 5];
function functionalProduct(el) {
  return el.reduce((total, x) => {return total *= x;});
}
console.log(functionalProduct(numList));

function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {lengths[element] = element.length; return lengths;}, {});
}


//OBJECTS

//Defining OBJECTS

// reverses a string
// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}
String.prototype.blank = function() {
  return this
}
let test = `' '`;
let emptyTest = (string) => {
  let empty = /^(?!\s*$).+/
  return string === empty;
}


// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toUpperCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
