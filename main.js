#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta("welcome to my todo list app"));
let todolist = [];
let condition = true;
while (condition) {
    let todolistanswer = await inquirer.prompt([
        {
            name: "todolist",
            type: "list",
            message: "what do you want to do?",
            choices: ["add todo", "cancel todo", "estimate todo", "quit"]
        }
    ]);
    if (todolistanswer.todolist === "add todo") {
        let addtodolist = await inquirer.prompt([
            {
                name: "todo",
                type: "input",
                message: "select your todo",
            },
            {
                name: "addmore",
                type: "confirm",
                message: "do you want to add more?",
                default: "false",
            }
        ]);
        todolist.push(addtodolist.todo);
        condition = addtodolist.addmore;
        console.log(todolist);
        if (todolistanswer.todolist === "cancel todo") {
            let canceltodolist = await inquirer.prompt([
                {
                    name: "todo",
                    type: "input",
                    message: "select your todo",
                }
            ]);
            let index = todolist.indexOf(canceltodolist.todo);
            todolist.splice(index, 1);
            console.log(todolist);
        }
        if (todolistanswer.todolist === "estimate odo") {
            console.log(todolist);
        }
        if (todolistanswer.todolist === "quit") {
            console.log(todolist);
        }
    }
    else {
        console.log("todo not found");
        condition = false;
    }
}
