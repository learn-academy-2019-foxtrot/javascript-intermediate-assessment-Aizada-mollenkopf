// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
getFib = (num) => {
  let fibArray = [1, 1]
  for(let i=1; i<num; i++){
    fibArray.push(fibArray[i]+fibArray[i-1])
  }
  return fibArray
}
console.log(getFib(10))



getFibRecursion = (num) => {
	if(num === 1){
		return [1, 1]
	} else {
		let fibArray = getFibRecursion(num - 1)
  	return [...fibArray, fibArray[num-1] + fibArray[num-2]]
	}
}
console.log(getFibRecursion(10))

// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]
 
 
     const oddChecker=(array)=>{
         return array.filter(value=>{
            return typeof value==="number" && value%2!==0
    })
}
console.log(oddChecker(fullArr1))
console.log(oddChecker(fullArr2))

// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(`type`,bicycle.type)

// Log the bell:
console.log(`bell`,bicycle.gear[2])

// Log the PSI:
console.log(`PSI`,bicycle.wheels.specs[2])


// 4. Write a function that takes in an array and returns an array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]

originalArray1.reverse()
console.log(`reverser`,originalArray1);
originalArray2.reverse()
console.log(`reverser`,originalArray2);




// 5. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3

    console.log( "letterCounter",ourString.toLocaleLowerCase().split("l").length-1)
    



// 6. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

console.log(middleLetters1 [Math.round((middleLetters1.length-1)/2)])
console.log(middleLetters2[Math.floor((middleLetters2.length - 1) / 2)] + (middleLetters2[Math.round((middleLetters2.length - 1) / 2)]))
const middleL = (string) => {
  return string[Math.round((string.length - 1) / 2)]
}

console.log(middleL(middleLetters1))
console.log(middleL(middleLetters2))


// 7. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)
var r1 = 2
var r2 = 5
var r3 = 100

const areaSphere = (radi) => {
  let sphere = (4 * Math.PI * (radi*radi))
  return sphere
}

console.log(areaSphere(r1))
console.log(areaSphere(r2))
console.log(areaSphere(r3))




// 8. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}
var doors  = myCar.specs.doors
console.log(doors)
//or
console.log(myCar.specs.doors)



// STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

const indexSum = (a) => {
  var result = [a[0]]
  var last = a[0]
  for (i = 1; i < a.length; i++) {
    last = last + a[i]
    result.push(last);
  }
  return result
}

console.log(indexSum(numbersToAdd1))
console.log(indexSum(numbersToAdd2))
//returns undefined
console.log(indexSum(numbersToAdd3))


