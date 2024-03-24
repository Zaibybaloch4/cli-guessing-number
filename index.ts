#!  /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 7 +1 );


const answers = await inquirer.prompt([
    {
    name : "userGuessedNumber" ,
    type : "number" ,
    message : "Please guess a number",
    },
]);


console.log(answers);

//conditional statement

if(answers.userGuessedNumber === randomNumber) {
    console.log("CONGRATULATION  YOUR GUESSED NUMBER IS CORRECT.");

}
else{
    console.log("YOU GUESSED A WRONG NUMBER.");
}

