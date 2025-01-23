# JavaScript Control flow - conditional statements - if-else

This assignment aims to reinforce the understanding and usage of the 'if...else' statements in JavaScript.

## Instructions

1. Open the `./07-01-control-flow-conditional-statements-if-else.js` file.
2. Create the algo 
3. Save the file and run the tests using Jest to verify your implementations.

## Getting Started

1. Clone this repository.
2. Open `./07-01-control-flow-conditional-statements-if-else.js`.
3. Follow the instructions within each function's comments.
4. Run `npm install` to install dependencies.
5. Run `npm test` to test your code using Jest.

**Objective:** 

This task aims to confirm your understanding of fundamental programming concepts shared across various programming languages. These include handling user input/output, using variables and methods, managing program flow and control structures, and manipulating strings and arrays.

**Black Jack Game Rules:** 

We are creating a simplified version of the Black Jack card game with the following rules:

1. The player begins with a score of 0.
2. The bank starts with a score randomly set between 16 and 21.
3. In each round, the player can draw a card with a random value between 1 and 11, which is added to their score.
4. The player can choose to draw another card or stick with the current score to finish the game.

**End Game Scenarios:** 

At the end of the game, there are five possible outcomes:
1. If the player's score is over 21, they "Lose" (bust).
2. If the player's score is exactly 21, they achieve a "Black Jack" and win.
3. If the player's score is greater than the bank's score, they "Win".
4. If the player's score is less than the bank's score, they "Lose".
5. If the player's score is equal to the bank's score, it's a "Push," and the player gets their money back.

**Specifications:** 

**Black Jack:**

- Implement the `pickBankScore` function, which should return a random bank score between 16 and 21. 
- Implement the `pickPlayerCard` function, which should return a random card value between 1 and 11.

**Croupier:**  

- Implement the `stateOfTheGame` function, responsible for creating a message containing the bank and player's scores. 
- Implement the `endGameMessage` function, to be called at the end of the game, containing the outcome (win, lose, or push).

**Interface**

Implement the main method which runs a Black Jack game from the terminal. It should work this way:
```bash
node ./07-01-control-flow-conditional-statements-if-else.js

'Card? "y" or "yes" to get a new card'
> yes
'Your score is 6, bank is 17'

'Card? "y" or "yes" to get a new card'
> yes
'Your score is 16, bank is 17'

'Card? "y" or "yes" to get a new card'
> yes
'Your score is 19, bank is 17'

'Card? "y" or "yes" to get a new card'
> no
'You beat the bank! You win.'
```


