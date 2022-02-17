// select elements
const incomeInput = document.getElementById("income-input");
const foodInput = document.getElementById("food-input");
const rentInput = document.getElementById("rent-input");
const clothInput = document.getElementById("cloth-input");
const saveInput = document.getElementById("save-input");
const totalExpenses = document.getElementById("total-expenses");
const balance = document.getElementById("balance");
const savingAmount = document.getElementById("saving-amount");
const remainingBalance = document.getElementById("remaining-balance");

// calculateBtn event listen
document.getElementById("btn-calculate").addEventListener("click", function () {
    const foodExpense = parseInt(foodInput.value);
    const rentExpense = parseInt(rentInput.value);
    const clothExpense = parseInt(clothInput.value);
    const income = parseInt(incomeInput.value);


});
