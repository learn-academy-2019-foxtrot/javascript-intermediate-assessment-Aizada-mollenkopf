// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT TESTING
// Coding practical questions

// 1. Write the code that would make this test pass.

// test("returns an array with all the numbers multiplied by two", () => {
      
        // expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
        // expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
        // expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
//     })
// })

let friendlyArray = [1,2,3,4,5]
let newArr = []
const multTwo = (arr) => {
  for (let i = 0; i < arr.length; i++)
  newArr.push(arr[i] *2 )
  return newArr;
};
console.log(multTwo(friendlyArray))


// 2. Write the code that would make this test pass.

// describe("greeter", () => {
//   let person1 = "Snap"
//   let person2 = "Crackle"
//   let person3 = "Pop"
//   test("greets a person by name", () => {
//     expect(greeter(person1)).toEqual("Hello, Snap!")
//     expect(greeter(person2)).toEqual("Hello, Crackle!")
//     expect(greeter(person3)).toEqual("Hello, Pop!")
//   })
// })
  var person1 = "Snap"
  var person2 = "Crackle"
  var person3 = "Pop"
  
const greetPerson = (name ) => {
  return "Hello" + " " + name + "!"
}

console.log(greetPerson(person1))
console.log(greetPerson(person2))
console.log(greetPerson(person3))