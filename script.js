// Elements
const currentCredit = document.getElementById("currentCredit");
const currentDebit = document.getElementById("currentDebit");
const currentBalance = document.getElementById("currentBalance");
const creditInput = document.getElementById("creditInput");
const debitInput = document.getElementById("debitInput");
const creditBtn = document.getElementById("creditBtn");
const debitBtn = document.getElementById("debitBtn");

// Credit Button Event
creditBtn.addEventListener("click", function() {
    const creditAmount = parseFloat(creditInput.value);
    if (creditAmount > 0) {
        const newCredit = parseFloat(currentCredit.innerText) + creditAmount;
        const newBalance = parseFloat(currentBalance.innerText) + creditAmount;
        currentCredit.innerText = newCredit;
        currentBalance.innerText = newBalance;
        creditInput.value = "";
    } else {
        alert("Please enter a valid amount.");
    }
});

// Debit Button Event
debitBtn.addEventListener("click", function() {
    const debitAmount = parseFloat(debitInput.value);
    const currentBalanceValue = parseFloat(currentBalance.innerText);

    if (debitAmount > 0 && debitAmount <= currentBalanceValue) {
        const newDebit = parseFloat(currentDebit.innerText) + debitAmount;
        const newBalance = currentBalanceValue - debitAmount;
        currentDebit.innerText = newDebit;
        currentBalance.innerText = newBalance;
        debitInput.value = "";
    } else if (debitAmount > currentBalanceValue) {
        alert("You don't have enough balance to debit.");
    } else {
        alert("Please enter a valid amount.");
    }
});
