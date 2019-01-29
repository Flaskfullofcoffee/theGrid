function palindrome(string) {
  return string === reverse(string);
}

// reverses a string
function reverse(string) {
  return string.split('').reverse().join('');
}
