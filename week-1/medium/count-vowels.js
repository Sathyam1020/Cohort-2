/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Convert the string to lowercase to handle both uppercase and lowercase vowels
    const lowercasedStr = str.toLowerCase();
  
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Use the filter function to get an array of vowels from the string
    const vowelArray = lowercasedStr.split('').filter(char => vowels.includes(char));
  
    // Return the count of vowels in the array
    return vowelArray.length;
}

const result1 = countVowels('Hello World'); // Output: 3
const result2 = countVowels('Testing123');   // Output: 2
