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
const message = document.getElementById("error-message");

// error handle with this function
function errorHandler(isTrue, errorMessage) {
    if (isTrue) {
        message.innerText = errorMessage;
        message.style.display = "block";
    } else {
        message.style.display = "none";
    }
}

// calculate total expenses and balance in this function
function calculate(foodExpense, rentExpense, clothExpense, income) {
    const totalCost = foodExpense + rentExpense + clothExpense;
    if (totalCost > income) {
        errorHandler(true, "Be Thrifty, You Don't Have Enough Money!");
        return;
    } else {
        errorHandler(false);
    }

    totalExpenses.innerText = totalCost;
    balance.innerText = income - totalCost;
}

// calculateBtn event listen
document.getElementById("btn-calculate").addEventListener("click", function () {
    const foodExpense = parseInt(foodInput.value);
    const rentExpense = parseInt(rentInput.value);
    const clothExpense = parseInt(clothInput.value);
    const income = parseInt(incomeInput.value);

    if (
        isNaN(foodExpense) ||
        foodExpense < 0 ||
        isNaN(rentExpense) ||
        rentExpense < 0 ||
        isNaN(clothExpense) ||
        clothExpense < 0 ||
        isNaN(income) ||
        income < 0
    ) {
        errorHandler(true, "Please Give Valid Number As Input!");
        return;
    } else {
        errorHandler(false);
    }

    calculate(foodExpense, rentExpense, clothExpense, income);
});

// saveBtn event listen
document.getElementById("btn-save").addEventListener("click", function () {
    const percent = parseInt(saveInput.value);
    const income = parseInt(incomeInput.value);
    const savings = (income * percent) / 100;
    const remainingAmount = parseInt(balance.innerText) - savings;

    if (isNaN(percent) || percent < 0 || percent > 100) {
        errorHandler(true, "Please Give Valid Number As Input!");
        return;
    } else if (remainingAmount < 0) {
        errorHandler(true, "You Don't Have Enough Money!");
        return;
    } else {
        errorHandler(false);
    }
    savingAmount.innerText = savings;
    remainingBalance.innerText = remainingAmount;
});
