#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

interface Currency {
  name: string;
  rate: number;
}

const currencies: Currency[] = [
  { name: "US Dollar", rate: 1 },
  { name: "Euro", rate: 0.82 },
  { name: "British Pound", rate: 0.72 },
  { name: "Japanese Yen", rate: 108.57 },
  { name: "Pakistani rupee", rate: 283.5 }, // Dollar rate in pakistan
];

function startCurrencyConverter() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "from",
        message: "Select the currency you're converting from:",
        choices: currencies.map((currency) => currency.name),
      },
      {
        type: "list",
        name: "to",
        message: "Select the currency you're converting to:",
        choices: currencies.map((currency) => currency.name),
      },
      {
        type: "number",
        name: "amount",
        message: "Enter the amount you want to convert:",
        validate: (value) => value > 0,
      },
    ])
    .then((answers) => {
      const fromCurrency: any = currencies.find(
        (currency) => currency.name === answers.from
      );
      const toCurrency: any = currencies.find(
        (currency) => currency.name === answers.to
      );
      const amount = answers.amount;
      const convertedAmount = (amount / fromCurrency.rate) * toCurrency.rate;
      console.log(
        chalk.green(
          `${amount} ${fromCurrency.name} is equal to ${convertedAmount.toFixed(
            2
          )} ${toCurrency.name}`
        )
      );
      startCurrencyConverter();
    });
}

console.log("Welcome to the currency converter!");
startCurrencyConverter();
