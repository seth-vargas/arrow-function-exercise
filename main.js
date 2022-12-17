// ES5 Map Callback

// old code
// function double(arr) {
//   return arr.map(function(val) {
//     return val * 2
//   })
// }

// Write an ES2015 Version
const double = (arr) => {return arr.map((val) => val * 2)}

// Refactor the following function to use arrow functions:

// old code
// function squareAndFindEvens(numbers){
//   var squares = numbers.map(function(num){
//     return num ** 2
//   })
//   var evens = squares.filter(function(square){
//     return square % 2 === 0
//   })
//   return evens
// }

// Refactored code
const squareAndFindEvens = (numbers) => {
  const squares = numbers.map((num) => num ** 2)
  return squares.filter((square) => square % 2 === 0)
}