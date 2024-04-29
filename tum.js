#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let paisa = 50000;
const pin = 1234;
console.log(chalk.italic.yellow.bold("\n\t<<<<<<<<Welcome to EasyPaisa app>>>>>>>>\n\t"));
let answer = await inquirer.prompt({
    type: "number",
    name: "pin",
    message: "Enter your pin:",
});
if (answer.pin == pin) {
    console.log(chalk.italic.green.bold("\n\tYour pin code is correct:💯🤝\n\t"));
    while (true) {
        let operatorAns = await inquirer.prompt({
            name: "operator",
            type: "list",
            message: "\nPlease select an option:\n",
            choices: [
                chalk.italic.green.bold("Check Balance"),
                chalk.italic.blue.bold("Transfer Money"),
                chalk.italic.cyan.bold("Bill Payments"),
                chalk.italic.gray.bold("Easy Load Package"),
                chalk.italic.greenBright.bold("Cash Back"),
                chalk.italic.cyanBright.bold("Savings"),
                chalk.italic.redBright.bold("Exit"),
            ],
        });
        if (operatorAns.operator == chalk.italic.green.bold("Check Balance")) {
            console.log(chalk.italic.cyan.bold(`\n\t"Your balance now: "${paisa}`));
        }
        if (operatorAns.operator === chalk.italic.blue.bold("Transfer Money")) {
            let transfer = await inquirer.prompt({
                name: "Money",
                type: "list",
                message: "\nPlease select an option:\n",
                choices: [
                    chalk.italic.green.bold("Easypaisa Transfer"),
                    chalk.italic.blue.bold("Bank Transfer"),
                ],
            });
            if (transfer.Money == chalk.italic.green.bold("Easypaisa Transfer")) {
                let easypaisa = await inquirer.prompt([
                    {
                        name: "easypaisa",
                        type: "number",
                        message: "\nPlease enter your easypaisa number:",
                    },
                    {
                        name: "amount",
                        type: "number",
                        message: "\nPlease enter the amount you want to transfer:",
                    },
                ]);
                if (easypaisa.amount <= paisa) {
                    paisa -= easypaisa.amount;
                    console.log(chalk.italic.yellow.bold(`\n\tYou have successfully transferred:\n\tYour balance now: ${paisa}`));
                }
                else {
                    console.log(chalk.italic.redBright.bold(`\n\tSorry, your balance is insufficient:`));
                }
            }
            else if (transfer.Money == chalk.italic.blue.bold("Bank Transfer")) {
                let bankAns = await inquirer.prompt([
                    {
                        name: "bank",
                        type: "list",
                        message: "\nPlease select a bank for transfer:\n",
                        choices: [
                            chalk.italic.greenBright.bold("Meezan Bank"),
                            chalk.italic.blueBright.bold("Al Habib Bank"),
                            chalk.italic.cyanBright.bold("NBA"),
                            chalk.italic.redBright.bold("HMB"),
                            chalk.italic.blackBright.bold("UBL"),
                            chalk.italic.blue.bold("HBL"),
                            chalk.italic.green.bold("MCB"),
                        ],
                    },
                    {
                        name: "cash",
                        type: "number",
                        message: "\nPlease enter the amount you want to transfer:",
                    },
                ]);
                if (bankAns.cash <= paisa) {
                    paisa -= bankAns.cash;
                    console.log(chalk.italic.blue.bold(`\n\tYou have successfully transferred:\n\tYour balance now: ${paisa}`));
                }
                else {
                    console.log(chalk.italic.redBright.bold(`\n\tSorry, your balance is insufficient:`));
                }
            }
        }
        if (operatorAns.operator == chalk.italic.cyan.bold("Bill Payments")) {
            let billAns = await inquirer.prompt([
                {
                    name: "bill",
                    type: "list",
                    message: "\nPlease select an option for bill payments:\n",
                    choices: [
                        chalk.italic.cyan.bold("Sui-Gass"),
                        chalk.italic.gray.bold("K-Electric"),
                        chalk.italic.red.bold("Water-Board"),
                        chalk.italic.yellow.bold("Ptcl"),
                    ],
                },
                {
                    name: "payment",
                    type: "number",
                    message: "\nPlease enter the amount you want to pay:",
                },
            ]);
            if (billAns.payment < paisa) {
                paisa = paisa - billAns.payment;
                console.log(chalk.italic.green.bold(`\n\tYour have successfully paid Bill:\n\tYour balance now: ${paisa}`));
            }
            else {
                console.log(chalk.italic.redBright.bold("\n\tYou don't have enough balance to pay the bill"));
            }
        }
        if (operatorAns.operator == chalk.italic.gray.bold("Easy Load Package")) {
            let loadAns = await inquirer.prompt([
                {
                    name: "load",
                    type: "list",
                    message: "\nPlease select an option for load package:\n",
                    choices: [
                        chalk.italic.green.bold("Jazz Package"),
                        chalk.italic.yellow.bold("Ufone Package"),
                        chalk.italic.cyan.bold("Telenor Package"),
                        chalk.italic.blue.bold("Zong Package"),
                        chalk.italic.gray.bold("Mobile balance"),
                    ],
                },
            ]);
            if (loadAns.load == chalk.italic.green.bold("Jazz Package")) {
                let JazzNo = await inquirer.prompt([
                    {
                        name: "Jazz",
                        type: "list",
                        message: "\nPlease select an option for Jazz Package:\n",
                        choices: [
                            chalk.italic.yellow.bold("Daily Package"),
                            chalk.italic.cyan.bold("Weekly Package"),
                            chalk.italic.gray.bold("Monthly Package"),
                        ]
                    },
                ]);
            }
            if (loadAns.load == chalk.italic.yellow.bold("Ufone Package")) {
                let UfoneNo = await inquirer.prompt([
                    {
                        name: "Ufone",
                        type: "list",
                        message: "\nPlease select an option for Jazz Package:\n",
                        choices: [
                            chalk.italic.yellow.bold("Daily Package"),
                            chalk.italic.cyan.bold("Weekly Package"),
                            chalk.italic.gray.bold("Monthly Package"),
                        ],
                    },
                ]);
            }
            if (loadAns.load == chalk.italic.cyan.bold("Telenor Package")) {
                let TelenorNo = await inquirer.prompt([
                    {
                        name: "Telenor",
                        type: "list",
                        message: "\nPlease select an option for Jazz Package:\n",
                        choices: [
                            chalk.italic.yellow.bold("Daily Package"),
                            chalk.italic.cyan.bold("Weekly Package"),
                            chalk.italic.gray.bold("Monthly Package"),
                        ],
                    },
                ]);
            }
            if (loadAns.load == chalk.italic.blue.bold("Zong Package")) {
                let ZongNo = await inquirer.prompt([
                    {
                        name: "Zong",
                        type: "list",
                        message: "\nPlease select an option for Jazz Package:\n",
                        choices: [
                            chalk.italic.yellow.bold("Daily Package"),
                            chalk.italic.cyan.bold("Weekly Package"),
                            chalk.italic.gray.bold("Monthly Package"),
                        ],
                    },
                ]);
            }
            let load = paisa - loadAns.choices;
            console.log(chalk.italic.cyanBright.bold(`\n\tYour are successfully package has been done:`));
            if (loadAns.load == chalk.italic.gray.bold("Mobile balance")) {
                let Mobile = await inquirer.prompt([
                    {
                        name: "balance",
                        type: "list",
                        message: "\nPlease select an option for load balance:\n",
                        choices: [
                            chalk.italic.redBright.bold("Jazz"),
                            chalk.italic.greenBright.bold("Ufone"),
                            chalk.italic.blueBright.bold("Telenor"),
                            chalk.italic.cyanBright.bold("Zong"),
                        ],
                    },
                    {
                        name: "payment",
                        type: "number",
                        message: "\nPlease enter the amount you want to load balance:",
                    },
                ]);
                if (Mobile.payment < paisa) {
                    paisa = paisa - Mobile.payment;
                    console.log(chalk.italic.yellowBright.bold(`\n\tYour have successfully paid load balance :\n\tYour balance now: ${paisa}`));
                }
                else {
                    console.log(chalk.italic.red.bold("\n\tYou don't have enough balance to pay the:"));
                }
            }
        }
        if (operatorAns.operator == chalk.italic.greenBright.bold("Cash Back")) {
            let cashAns = await inquirer.prompt({
                name: "cash",
                type: "number",
                message: "\nPlease enter the amount you want to cash back:",
            });
            if (cashAns.cash < paisa) {
                paisa = paisa + cashAns.cash;
                console.log(chalk.italic.blueBright.bold(`\n\tYou have successfully received cash back:\n\tYour balance is now: ${paisa}`));
            }
            else {
                console.log(chalk.italic.redBright.bold("Sorry, you can only pay in limited amount:"));
            }
        }
        if (operatorAns.operator == chalk.italic.cyanBright.bold("Savings")) {
            let savingsAmount = await inquirer.prompt({
                name: "amount",
                type: "number",
                message: "\nPlease enter the amount you want to save:",
            });
            if (savingsAmount.amount + paisa)
                paisa += savingsAmount.amount;
            console.log(chalk.italic.greenBright.bold(`\n\tYou have successfully saved:\n\tYour balance is now: ${paisa}`));
        }
        if (operatorAns.operator == chalk.italic.redBright.bold("Exit")) {
            console.log(chalk.italic.cyanBright.bold("\n\t<<<<<<<<Thank you for using our services.easypaisa app:>>>>>>>>"));
            break;
        }
    }
}
else {
    console.log(chalk.italic.red.bold("\n\tIncorrect pin code: Exiting...👎❌"));
}
