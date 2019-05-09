// Write a method that will take a string as input, and return a new string with the same letters in reverse order.

// loop backwards and add each letter to new variable
function reverse1(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString + string[i];
  }
  return reversedString;
}

// console.log(reverse1('Hello'));
