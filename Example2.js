let bankBalance = 1000;

//using array to test multiple withdrawal amounts

// An array of withdrawal amounts to test the ATM logic
let withdrawalAmounts = [600, 300, 700, 500, 1000];

for (let amount of withdrawalAmounts) {
    console.log("---------------------------------");
    console.log("Processing request for $" + amount);

    if (amount > bankBalance) {
    console.log("Error: Insufficient funds in your account.");
}

else if (amount > 500) {
    console.log("Error: The maximum limit per withdrawal is $500.");
}   

else {
    console.log("Success! Please take your cash.");
}

}

