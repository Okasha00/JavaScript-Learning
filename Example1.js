// The Scenario: ATM Cash Withdrawal 🏧
// Imagine you are building the logic for an ATM machine. A user wants to withdraw money.
// The Rules:
// 1. Rule 1: The user cannot withdraw more money than they actually have in their bank balance.
// 2. Rule 2: The ATM can only give a maximum of $500 per withdrawal (even if they have more money in their account).
// Your Given Data (Inputs):
// • let bankBalance = 1000; (The user has $1000 in their account)
// • let withdrawalAmount = 600; (The user is trying to take out $600)




let bankBalance = 1000;
let withDrawalAmount = 300; // Let's make it a valid amount



if (withDrawalAmount > bankBalance) {
    console.log("Error: The maximum limit per withdrawal is $500.");
}

else if (withDrawalAmount > 500) {
     console.log("Error: Insufficient funds in your account.");
    
} else {
   console.log("Success! Please take your cash.");
    
}


