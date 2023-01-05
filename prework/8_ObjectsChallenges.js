// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// keys(obj); // ["a", "b", "c"]
// let obj2 = { first: 'Matt', last: 'Lane' };
// keys(obj2); // ["first", "last"]
// let obj3 = {};
// keys(obj3); // []

let objA= {a:1, b:2, c:3};
let objB={ first: 'Bob', last: 'Bobbly'};
let objC= {};

 function keys (obj) {
    let keysArr = [];
    for (let key in obj) {
        keysArr.push(key);
    }
    return keysArr;
 }

 console.log(keys(objA))
 console.log(keys(objB))
 console.log(keys(objC))

// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// values(obj); // [1,2,3]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj2); // ["Matt", "Lane", true]
// let obj3 = {};
// values(obj3); // []
let objD= {a: 28, b:72, c:35};
let objE= {first: 'Tina', last: 'Turner', isTurtleOwner: true};
let objF= {};

function values (obj) {
    let valuesArr= [];
    for (let value in obj) {
        valuesArr.push(obj[value]);
    }
    return valuesArr;
}

console.log(values(objD));
console.log(values(objE));
console.log(values(objF));


// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// entries(obj);
// [["a",1], ["b",2], ["c",3]]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
// let obj3 = {};
// entries(obj3); // []
let objG= {a:5, b:6, c:7}
let objH= {first: 'Nicholas', last: 'Manzanares', isCatOwner: false}
let objI= {}

function entries(obj) {
    let entriesArr = [];
    for (let item in obj) {
        entriesArr.push([item,obj[item]])
    }
    return entriesArr
}

console.log(entries(objG))
console.log(entries(objH))
console.log(entries(objI))

// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
// Examples:
// pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
// ["Tim", "Matt", "Elie"]
// pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
// [true, false, undefined]

function pluck (obj, key) {
    return obj.map(value => value[key])
}

console.log (pluck([{name: 'Anneice'}, {name: 'Raquel'}, {name: 'Yazmin'}], 'name'))
console.log(pluck([{name:'Anneice', isMacOwner: true}, {name: 'Nicholas', isMacOwner: false}, {name: 'Mia', isMacOwner: false}], 'isMacOwner'))

// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.
// Examples:
// stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"
// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"
// stringFromObject({}); // ""

function stringFromObject (obj) {
    let newString= ''
    for (let i in obj) {
        newString += `${i} = ${obj[i]}, `
    }
    return newString.slice(0,-2)
}
 console.log(stringFromObject({a: 17, b: '18'}))
 console.log(stringFromObject({name: 'Anneice', job: 'Software engineer', likesSushi: true}))
 console.log(stringFromObject({}))

// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
// Examples:
// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]

function minMaxKeyInObject (obj) {
    let minKey = Infinity
    let maxKey = -Infinity

    for (let key in obj) {
        let keyNum = +key
        if (keyNum < minKey) {
            minKey=keyNum
        }
        if (keyNum > maxKey) {
            maxKey=keyNum
        }
    }
    return [minKey, maxKey]
}

console.log(minMaxKeyInObject({2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e'}))
console.log(minMaxKeyInObject({ 9: 'Mia', 4: 'Christian', 3: 'Ariana'}))
console.log(minMaxKeyInObject({90: 'socks', 20: 'shirts', 200: 'hair pins'}))


