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
