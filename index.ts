#! /usr/bin/env node

import inquirer from 'inquirer';

// Generate a random number
const randomNumber = Math.floor(Math.random()*10 +1);

const main = async () => {
  // Define the type for the answers
  interface Answers {
    userGuessednumber: number;
  }

  // Use inquirer.prompt to get user input with a generic type
  const answers = await inquirer.prompt<Answers>([
    {
      name: 'userGuessednumber',
      type: 'number',
      message: 'Please guess a number between 1-10',
    }
  ]);

  // Compare the random number with the user's guess and show the result
  if (answers.userGuessednumber === randomNumber) {
    console.log('Congratulations! You guessed the right number.');
  } else {
    console.log(`You guessed the wrong number.`);
  }
};

// Call the main function to run the code
main();
