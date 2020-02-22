/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line

function blackJack(playerCardScore, dealerCardScore){
  // both over 21
  if (playerCardScore > 21 && dealerCardScore > 21){
    return 0
  }
  // Draw case
  else if (playerCardScore===dealerCardScore){
    return playerCardScore
  }

  // if dealer goes over
  else if (dealerCardScore>21){
    return playerCardScore
  }

  // if player goes over
  else if (playerCardScore > 21){
    return dealerCardScore
  }

  else if (playerCardScore > dealerCardScore){
    return playerCardScore
  }

  else if (dealerCardScore > playerCardScore){
    return dealerCardScore
  }

  else{
    return "error"
  }
}

const result1 = blackJack(19, 22)
console.log(result1)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 2:')

// Add your code below this line
function scrabbleScore(word){
  const scoreTable = scrabbleTable()
  // capitalize all letters
  word = word.toUpperCase()
  letters = word.split("")

  let score = 0

  letters.forEach((letter) => {
    if(scoreTable[letter] !== undefined){
      score = score + scoreTable[letter]
    }
  });
  return score
}

function scrabbleTable(){
  let table = {}
  // 1 point - A, E, I, O, U, L, N, R, S, T
  const onePoint = ['A','E','I','O','U','L','N','R','S','T']
  onePoint.forEach((point) => {
    table[point] = 1
  });
  // 2 point - D, G
  const twoPoint = ['D','G']
  twoPoint.forEach((point) => {
    table[point] = 2
  });
  // 3 point - B, C, M, P
  const threePoint = ['B','C','M','P']
  threePoint.forEach((point) => {
    table[point] = 3
  });
  // 4 point - F, H, V, W, Y
  const fourPoint = ['F', 'H', 'V', 'W', 'Y']
  fourPoint.forEach((point) => {
    table[point] = 4
  });
  // 5 point - K
  const fivePoint = ['K']
  fivePoint.forEach((point) => {
    table[point] = 5
  });
  // 8 point - J, X
  const eightPoint = ['J','X']
  eightPoint.forEach((point) => {
    table[point] = 8
  });
  // 10 point - Q, Z
  const tenPoint = ['Q','Z']
  tenPoint.forEach((point) => {
    table[point] = 10
  })
  return table
}

const result2 = scrabbleScore("function")
console.log(result2)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 3:')

// Add your code below this line

function isPalindrome(word){
  // check word left to right
  for(let i=0; i < word.length; i++){
    // check word right to left
    for(let j=word.length -1-i; j> word.length -2-i;j--){
      if (word[i]!=word[j]){
        return false
      }

      else if (word[i]===word[j] && i===j){
        return true
      }
    }
  }
  return true
}

const result3 = isPalindrome("run")
console.log(result3)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 4:')

// Add your code below this line

function doubleLetters(word){
  word = word.toLowerCase()
  const letters = word.split("")
  let counter = {}
  let flag = false
  letters.forEach((letter) => {
    if(counter[letter] === undefined){
      counter[letter] = 1
    }
    else {
      counter[letter] += 1
      flag = true
    }
  })
  return flag
}

const result4 = doubleLetters("loop")
console.log(result4)


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 1
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 5 - bonus:')

// Add your code below this line

function wordCount(phrase){
  phrase = phrase.toLowerCase()
  const words = phrase.split(" ")
  let counter = {}

  // remove lasta character of word if it punctuation
  words.forEach((word) => {
    if(word[word.length-1]=== '!' || word[word.length-1]=== '.' || word[word.length-1]=== ',' || word[word.length-1]=== '?'){
      word = word.substring(0,word.length-1)
    }
    if(counter[word] !== undefined){
      counter[word] += 1
    }
    else {
      counter[word] = 1
    }
  })
  return counter
}

const result5 = wordCount("Baby shark, doo doo doo doo doo doo")
console.log(result5)
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
