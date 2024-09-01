#!/usr/bin/env node

import chalk from 'chalk';

import { input } from '@inquirer/prompts';

// Parent Class
class Person{ 

// Declare a field to represent the personality   
personality: string;

userInput;

constructor(){
    this.personality = "Mystery";

    this.userInput =
        {
            message:"select type 1 if you like to talk to others and select type 2 if you would rather keep to your self :",

        };      
}

    async userAnswer() {
     let answer = await input (this.userInput);

     if (answer == "1"){

        this.personality = "Extravert";
        
     }else if (answer == "2") {

        this.personality = "Introvert";
        
     }else {
    
        this.personality = "You are still a Mystery"
        
     }
     console.log(chalk.bold.blue(`Your Personality: ${this.personality}`))
  
 };

}

// let personAnswer = new Person();
 //personAnswer.userAnswer();


                //class Student inherite class Person
// Derived Class
class Student extends Person {

    // private field (backing field) hold any data assigned Name Property
    private _name:string;
    userName;

    constructor(){
         super();
        this._name = "";
        
        this.userName = 
            {
                message:"What is your name? ",
            }
    }
    
    async getName(){

            const answer2 = await input (this.userName);

            console.log(chalk.bold.green(`Hello, ${answer2}! Your personality: ${this.personality}`));

        
    }
}

async function main() {
    let student = new Student();
    await student.userAnswer(); // Ensure this completes before moving to the next prompt
    await student.getName();
}

main();

