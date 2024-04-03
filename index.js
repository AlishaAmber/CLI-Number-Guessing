#! usr/bin/env node
import inquirer from "inquirer";
const arbitraryFigure = Math.floor(Math.random() * 8 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-8:",
    },
]);
if (answer.userGuessedNumber === arbitraryFigure) {
    console.log("Well done, you guessed the right number.");
}
else {
    console.log("You guessed wrong number");
}
