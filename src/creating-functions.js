// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function addition(input) {
  return input + 1
}

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function capitalise(input) {
  return input.charAt(0).toUpperCase() + input.slice(1)
}

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below

function capitalized(input) {
  return 'Hi, ' + capitalise(input) + ' :)'
}

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below

function numberOfWords(input) {
  let count = 0
  for (i = 0; i < input.length; i++) {
    if (typeof input[i] === 'string') {
      count++
    }
  }
  return count
}

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below

function edwardinator(input) {
  if ('edward' in input) {
    return input
  } else {
    input['edward'] = 'amazing'
    return input
  }
}

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: addition,
  b: capitalise,
  c: capitalized,
  d: numberOfWords,
  e: edwardinator
}
