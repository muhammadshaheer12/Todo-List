#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta("welcome to my todo list app"));
let todolist = ["iftar", "namaz", "coding", "sleep"];
let condition = true;
while (condition) {
    let todolistanswer = await inquirer.prompt(
        [
            {
                name: "todo",
                type: "list",
                message: "what do you want to add in your todos?",
                choices: ["add", "delete", "update", "read"],
            }
        ]
    );
    if (todolistanswer.todo === "add") {
        let addtodo = await inquirer.prompt(
            [
                {
                    name: "todo",
                    type: "input",
                    message: "select your todo",
                },
                {
                    name: "addmore",
                    type: "confirm",
                    message: "do you want to add more in your todos?",
                    default: "false",
                }
            ]
        );
        todolist.push(addtodo.todo)
        condition = addtodo.addmore;
        console.log(todolist);
    }
    else if (todolistanswer.todo === "delete") {
        let deletetodo = await inquirer.prompt(
            [
                {
                    name: "todo",
                    type: "input",
                    message: "select your todo",
                }
            ]
        );
        let index = todolist.indexOf(deletetodo.todo)
        todolist.splice(index, 1);
         console.log(todolist);
    }
    else if (todolistanswer.todo === "update") {
        console.log(todolist);
    }
    else if (todolistanswer.todo === "read") {
         console.log(todolist);
    }
    else {
        console.log("exiting todolist");
        condition = false;
    }
}