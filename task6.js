function budgetplanner(){
let income = Number(prompt("Enter your monthly income:"));

let rent = Number(prompt("Enter rent expense:"));
let groceries = Number(prompt("Enter groceries expense:"));
let transport = Number(prompt("Enter transport expense:"));

let totalExpenses = rent + groceries + transport;
let remaining = income - totalExpenses;
let percentage = (totalExpenses / income) * 100;

let message = (totalExpenses > income) ? "Overspending!" : "You are within budget.";

alert("Total Expenses: " + totalExpenses +
      "\nRemaining Balance: " + remaining +
      "\nPercentage Spent: " + percentage.toFixed(2) + "%" +
      "\nMessage: " + message);
}
budgetplanner()