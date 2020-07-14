const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];

//Print out an array of the inventors whose name starts with 'A'.

let beginA = inventors.filter(word => word[0] === "A");
console.log(beginA)

 //Print out an array of the inventors whose name contains 'n'.
let contain_n = (word) => {
    return word.includes('n');
}
console.log(inventors.filter(contain_n))

//Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
let contain_double = (word) => {
    let result = false;
    let currentChar;
    let wordArray = word.split('');
    console.log(wordArray)
    wordArray.forEach(char => {
        if (currentChar) {
            result = result || (currentChar === char)
            currentChar = char;
        }
        else {
            currentChar = char;
        }
    });
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i + 1]) {
            result = true;
            break;
        }
    }
    return result;
}
console.log(inventors.filter(contain_double)
)

// contain_double.map((_,i) => {

// })


// 
// let filterOddNumberFunction = num => num%2 ===1
//console.log(numbers.filter(filterOddNumberFunction))

//   let oddNumber = numbers.filter(num => num%2 === 1)  
//   console.log(oddNumber)

//Print out an array of the numbers which are odd.
console.log(numbers.filter(num => num %2 ===1))

//Print out an array of the numbers that have two digits.

let twoDigit = numbers.filter(num => num.toString().length === 2)
console.log(twoDigit)

//Print out an array of the numbers which are prime
let primeNumber = (num) => {
    let result = num > 1;
    let maximum = Math.floor(Math.sqrt(num))
    for (let i = 2; i <= maximum; i++) {
        if (num % i === 0) {
            result = false;
            break;
        }
    }
    return result
}

console.log(numbers.filter(primeNumber))


//map
//Print out the first name of each inventor.
let firstName = word => word.split(' ')[0]
console.log(inventors.map(firstName))

console.log(inventors.map(word => word.split(' ')[0]))

//Print out the length of every inventor's full name.
console.log(inventors.map(word => word.length))

//Print out all the inventors' names in uppercase
console.log(inventors.map(word => word.toUpperCase()))

//Print out initials of all inventors(e.g. A.E., I.N., ...)

let intalLetter = inventors.map(name => {
    let inventorSplit = name.split(" ")
    let result = ''
      for(let i=0; i< inventorSplit.length;i++){
         result += inventorSplit[i][0] + '.'
      }
    return result
    })
    console.log(intalLetter)
    
//Print out an array of every number multiplied by 100
console.log(numbers.map(num => num * 100))

//Sort
//Sort all the inventors in alphabetical order, A-Z.
console.log(inventors.sort())

//Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.
let reverseArr = arr => {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i])
    }
    return result
}
console.log(reverseArr(inventors))

//Reduce
//Find the sum of all the numbers
console.log(numbers.reduce((acc, num) => acc + num))
//Find the sum of all the even numbers
console.log(numbers.reduce((acc, num) => {
    let res = acc;
    if (num % 2 === 0) {
        res = acc + num
    }
    return res;
}))
//Create a string that has the first name of every inventor.
console.log(inventors.reduce((acc, word) => acc + ' ' + word.split(' ')[0]))


// Some/Every
//Does any inventor have the letter 'y' in their name?
let charY = word => {
    let result = false;
    for (let i = 0; i <= word.length; i++) {
        if (word[i] === "y") {
            result = true;
            break;
        }
    }
    return result;
}
console.log(inventors.some(charY))

//Does every inventor have the letter 'e' in their name?
let charE = word => {
    let result = false;
    for (let i = 0; i <= word.length; i++) {
        if (word[i] === "e") {
            result = true;
            break;
        }
    }
    return result;
}
console.log(inventors.every(charE))

// Does every inventor have first name that's longer than 4 characters?
let charX = word => {
    let firstName = word.split(' ')[0]
    console.log(firstName);
    return firstName.length > 4;
}
console.log(inventors.every(charX))

//find
//Find the inventor that has a middle name
let charZ = word => {
    let midName = word.split(' ')
    return midName.length > 2;
}
console.log(inventors.find(charZ))
 
//Find the number divisible by 7
console.log(numbers.find(num => num % 7 === 0))

//Return a new array, that only has the numbers that are not divisible by 7
console.log(numbers.filter(num => num % 7 !== 0))

