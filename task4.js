function ATMSimulator() {
let pin = prompt("Enter your PIN:");
let balance = 1000; // initial balance

if (pin === "1234") {
    let choice = prompt("Choose an option:\n1. Withdraw\n2. Deposit\n3. Check Balance");

    if (choice === "1") {
        let amount = Number(prompt("Enter withdrawal amount:"));
        if (amount <= balance) {
            balance -= amount;
            alert("Withdrawal successful! New balance: " + balance);
        } else {
            alert("Insufficient balance!");
        }
    } else if (choice === "2") {
        let amount = Number(prompt("Enter deposit amount:"));
        balance += amount;
        alert("Deposit successful! New balance: " + balance);
    } else if (choice === "3") {
        alert("Your current balance is: " + balance);
    } else {
        alert("Invalid choice!");
    }
} else {
    alert("Incorrect PIN!");
}
}
ATMSimulator()
