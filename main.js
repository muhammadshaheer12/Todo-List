#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta("welcome to my todo list app"));
let todos = [];
let todo = true;
while (todo) {
    let todoans = await inquirer.prompt([
        {
            name: "todo",
            type: "list",
            message: "what do you want to add in your todos?",
            choices: ["add", "delete", "update", "read", "exit"],
        }
    ]);
    if (todoans.todo === "add") {
        let addans = await inquirer.prompt([
            {
                name: "add",
                type: "input",
                message: "enter your todo",
            },
            {
                name: "addmore",
                type: "confirm",
                message: "do you want to add more in your todos?",
                default: "false",
            }
        ]);
        todos.push(addans.add);
        todo = addans.addmore;
        console.log(todos);
    }
    else if (todoans.todo === "delete") {
        let deleteans = await inquirer.prompt([
            {
                name: "delete",
                type: "list",
                message: "select the todo you want to delete",
                choices: todos,
            }
        ]);
        let index = todos.indexOf(deleteans.delete);
        todos.splice(index, 1);
        console.log(todos);
    }
    else if (todoans.todo === "update") {
        console.log(todos);
    }
    else if (todoans.todo === "read") {
        console.log(todos);
    }
    else {
        console.log("exit todo list app");
        todo = false;
    }
}
