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

// Confirm the Ending

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  // Compare last letter to target's last letter
  var strLen = target.length;
  if (str.substr(-strLen) === target)
    {
      return true;
    }
  else
    {
      return false;
    }
}

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");

// Repeat a string repeat a string

function repeatStringNumTimes(str, num) {
  // repeat after me
  // Return empty string if number is negative
  if (num < 0)
    {
      return "";
    }
  // Repeat a given string // Repeat it num amount of times
  else
    {
      str = str.repeat(num);
      return str;
    }
}

repeatStringNumTimes("abc", 3);

// Truncate a string

function truncateString(str, num) {
  // Clear out that junk in your trunk
  // Truncate string if longer than given number
  if (str.length > num && num > 3)
    {
      str = str.slice(0, num - 3) + "...";
      return str;
    }
  else if (num < 3)
    {
      str = str.slice(0, num) + "...";
      return str;
    }
  return str;
}

truncateString("A-", 1);

// Chunky Monkey

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arrays = [];
  while (arr.length > 0)
    {
      arrays.push(arr.splice(0, size));
    }
  return arrays;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Slasher Flick

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  for (i = 1; i < arr.length; i++)
    {
      arr.splice(0, howMany);
    }
  return arr;
}

slasher(["burgers", "fries", "shake"], 1);

// Mutations

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();

  for (i = 0; i < test.length; i++)
    {
      if (target.indexOf(test[i]) < 0)
        {
          return false;
        }
    }
  return true;
}


mutation(["hello", "hey"]);

//Falsy Bouncer

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  // Remove values from array
  arr = arr.filter(Boolean);
  return arr;
}

bouncer([7, "ate", "", false, 9]);

// Seek and Destroy

function destroyer(arr) {
  var newArray = [];
  var testArray = [];
  // Remove all the values
  // Turn arguments into a separate array
  testArray = arr.slice.call(arguments);
  // Remove the original array
  testArray = testArray.splice(1);
  // Remove the arguments that are in the array
  newArray = arr.filter(function(arr){return testArray.indexOf(arr) === -1;});

  return newArray;
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5);

// Where do I belong

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  // Push num into array so that we can sort it and then find the value
  arr.push(num);
  // Sort Array to make it linear
  arr = arr.sort(function(a, b) {return a - b;});
  // Get index of number where it should go
  arr = arr.indexOf(num);
  return arr;
}

getIndexToIns([40, 60], 50);

// Caesars Cipher

function rot13(str) {
var abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F', 'G','H','I','J','K','L','M'];
var decodedArr = [];
for (i=0; i < str.length; i++) {
  var newArr = abc.indexOf(str[i]) + 13;
  if(abc.indexOf(str[i]) == -1) {
  decodedArr.push(str[i]);
} else {
  decodedArr.push(abc[newArr]);
 }
}
return decodedArr.join("");
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");
