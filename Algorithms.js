// Reverse a String

function reverseString(str) {
  var string = str;
  // Split string and put into array
  var array = [];
  array = string.split('');
  // Reverse
  array.reverse();
  // Put the split string back together and return
  str = array.join('');
  return str;
}

reverseString("hello");

// Factorialize a Number

function factorialize(num) {
  var array = [];
  var p = 1;
  // Put each individual number into the array by pushing it in
  for (i = 1; i <= num; i++)
    {
      array.push(i);
    }
  // Loop to factorialize
  for (i = 1; i < array.length; i++)
    {
      p *= array[i];
    }
  return p;
}

factorialize(5);

// Check for Palindromes

function palindrome(str) {
  // Good luck!
  // Remove all spaces and punctuation
  str = str.replace(/[^a-z0-9+]+/gi, '');
  // Convert to LowerCase
  str = str.toLowerCase();
  // Reverse the String and use as test variable
  var rstr = str.split("").reverse().join("");
  // Check if String characters match
  if (rstr === str)
    {
      return true;
    }
  else
    {
    return false;
    }
}

palindrome("nope");

//Find the Longest Word in a String

function findLongestWord(str) {
  // Split string and put into Array
  var words = [];
  words = str.split(" ");
  // Find the longest string in Array
  var longest = words.reduce(function (a, b) { return a.length > b.length ? a : b; });
  // Return the length of the longest string
  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// Title Case a Sentence

function titleCase(str) {
  // Make sure everything is lowercase
  str = str.toLowerCase();
  // Split string into an array
  str = str.split(" ");
  // Capitalize the first letter of each word
  for(var i = 0; i < str.length; i++){
    // Split up the string
    str[i] = str[i].split('');
    // Convert first letter to uppercase
    str[i][0] = str[i][0].toUpperCase();
    // Join the string back together
    str[i] = str[i].join('');
  }
  str = str.join(" ");
  return str;
}

titleCase("I'M a little tea pot");

// Return Largest Numbers in Arrays

function largestOfFour(arr) {
  // You can do this!
  // Loop through array and return the largest number
  // Create new Array that stores the biggest numbers
  var largestnumbers = [];
  for (i = 0; i < arr.length; i++)
    {
      largestnumbers.push(Math.max.apply(Math, arr[i]));
    }

  return largestnumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
