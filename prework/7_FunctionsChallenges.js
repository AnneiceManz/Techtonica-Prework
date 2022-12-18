// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called prependToString, which accepts two strings.
// The function should return a new string with the second string prepended to the first string.
// Examples:
// prependToString('awesome', 'very') // --> 'veryawesome'
// prependToString('world', 'hello ') // --> 'hello world'
// prependToString('nothing', '') // --> 'nothing'

function prependToString(str1, str2) {
    let newStr = str2.concat(str1)
    return newStr
}

console.log(prependToString ('sugar','brown'))
console.log(prependToString ('mouse', 'minnie'))

// Exercise 2. Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.
// The function should return true if the first string includes the character, otherwise it should return false.
// IMPORTANT: Do not use the built in string.includes() function!
// Examples:
// stringIncludes('awesome', 'e'); // --> true
// stringIncludes('awesome', 'z'); // --> false

function stringIncludes (word, char) {
    if (word.indexOf(char)> -1) {
        return true;
    } else {
        return false;
    };
};

console.log(stringIncludes ('anneice', 'e'))
console.log(stringIncludes ('techtonica', 'l'))

// Exercise 3. Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.
// The function should return the last index at which the character exists or -1 if the character is not found.
// IMPORTANT: Do not use the built in "string".lastIndexOf() function!
// Examples:
// stringLastIndexOf('awesome', 'e'); // --> 6
// stringLastIndexOf('awesome', 'z'); // --> -1

function stringLastIndexOf (str , letter) {
    if (str.includes(letter)) {
        for (let i=0; i<= str.length; i++) {
            let currentLetter = str[str.length -1 -i]
            if (currentLetter ==letter) {
                return str.length -1 -i;
            } 
        }
    } else {
        return -1;
    }
}

console.log(stringLastIndexOf('awesome', 'e'))
console.log(stringLastIndexOf('awesome', 'z'))
console.log(stringLastIndexOf('manzanares', 'z'))

// Exercise 4. Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.
// The function should return a new string with the characters removed.
// Examples:
// removeFromString('Elie', 2, 2) // --> 'El'
// removeFromString('Elie', 0, 1) // --> 'lie'
// removeFromString('Hello School', 0, 6) // --> 'School'
// removeFromString('Hello School', 2, 4) // --> 'HeSchool'
// removeFromString('Hello School', 6, 400) // --> 'Hello '

function removeFromString (strA, index, numOfCharToRemove) {
    let slicedStr = strA.slice (0, index) + strA.slice(index + numOfCharToRemove);
    return slicedStr
}

console.log(removeFromString ('Elie', 2,2))
console.log(removeFromString('Merry Christmas',0,6))
console.log(removeFromString('I want Tacos!', 7, 5))

// Exercise 5. Write a function called indexOf, which accepts an array and a number.
// The function should return the first index at which the value exists or -1 if the value is not found.
// IMPORTANT: Do not use the built in array.indexOf() function!
// Examples:
// let arr = [5, 10, 15, 20];
// indexOf(arr, 20); // --> 3
// let arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); // --> 1
// let arr3 = [1, 2];
// indexOf(arr3, 10); // --> -1
let arr = [5, 10, 15, 20]
let arr2 = [1, 2, 3, 4, 5]
let arr3 = [1,2]


function indexOf (arr, num) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i]===num) {
            return i
        }
    }
    return -1
}

console.log(indexOf(arr, 20))
console.log(indexOf(arr2, 2))
console.log(indexOf(arr3, 10))

// Exercise 6. Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return true if the value exists in the collection when we search starting from the starting index. Otherwise, it should return false.
// The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.
// Examples:
// includes([1, 2, 3], 1) // --> true
// includes([1, 2, 3], 1, 2) // --> false
// includes([1, 2, 3], 6) // --> false
// includes({ 'a': 1, 'b': 2 }, 1) // --> true
// includes({ 'a': 1, 'b': 2 }, 'a') // --> false
// includes('abcd', 'b') // --> true
// includes('abcd', 'e') // --> false
// includes('abcd', 'a', 2) // --> false

function includes (collection, value, indexA) {
    if (typeof collection === 'string' || typeof collection === 'array') {
        for (let i=indexA; i < collection.length; i++) {
            if (collection[i] === value) {
                return true 
            }
        }
    }

    if (typeof collection === 'obejct') {
        for(let item in collection) {
            if (collection[item] === value) {
                return true 
            }
        }
    }
    return false
}

console.log(includes([1, 2, 3], 1))
console.log(includes([1, 2, 3], 1, 2))
console.log(includes([1, 2, 3], 6))
console.log(includes({ 'a': 1, 'b': 2 }, 1))
console.log(includes({ 'a': 1, 'b': 2 }, 'a'))
console.log(includes('abcd', 'b'))
console.log(includes('abcd', 'e'))
console.log(includes('abcd', 'a', 2))