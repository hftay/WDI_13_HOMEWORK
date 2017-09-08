console.log ("Show Me The Money");

// take userinput
// listen for button clicked
//	if deposit clicked 
//			add userinput to current balance
// 	if withdraw clicked
	// 		compare userinput to current balance
	//			if sufficient balance
	//				deduct userinput from current balance
	//			if insufficient balance
	//				display "insufficient funds"

// consider manipulating button call, rather than duplicating code twice!

//-------------------------SAVINGS ACCOUNT---------------------------//
var savingsAccCurrentBalance = document.querySelector('.savings #balance');
var savingsAccUserInputStr = document.querySelector('.savings #userInput');

var savingsAccWithdrawButton = document.querySelector(".savings #withdraw");
var savingsAccDepositButton = document.querySelector(".savings #deposit");

var savingsWithdrawal = function (balance, withdrawal){
	if (balance >= withdrawal){
		return balance - withdrawal;
	} else {
		return "Sorry, insufficient funds available :(";
	}
};

// var newBalance = function(currentBalance, userInputStr){
// 	var userInputNum = Number(userInputStr.value);
// 	var balance = Number(currentBalance.textContent);
// 	var updateBalance = balance + userInputNum;
// 	currentBalance.textContent = updateBalance;
// }

savingsAccDepositButton.addEventListener("click", function(){
	console.log ("deposit button clicked");
	var userInputNum = Number(savingsAccUserInputStr.value);
	var balance = Number(savingsAccCurrentBalance.textContent);
	var updateBalance = balance + userInputNum;
	console.log ("balance is " + updateBalance);
	savingsAccCurrentBalance.textContent = updateBalance;
});

savingsAccWithdrawButton.addEventListener("click", function(){
	console.log ("withdraw button clicked");
	var userInputNum = Number(savingsAccUserInputStr.value);
	var balance = Number(savingsAccCurrentBalance.textContent);
	var updateBalance = savingsWithdrawal(balance, userInputNum);
	console.log ("balance is " + updateBalance);
	savingsAccCurrentBalance.textContent = updateBalance;
});

//-------------------------CHECKING ACCOUNT---------------------------//
var checkAccCurrentBalance = document.querySelector('.checking #balance');
var checkAccUserInputStr = document.querySelector('.checking #userInput');

var checkAccWithdrawButton = document.querySelector(".checking #withdraw");
var checkAccDepositButton = document.querySelector(".checking #deposit");


checkAccDepositButton.addEventListener("click", function(){
	console.log ("deposit button clicked");
	var userInputNum = Number(checkAccUserInputStr.value);
	var balance = Number(checkAccCurrentBalance.textContent);
	var updateBalance = balance + userInputNum;
	console.log ("balance is " + updateBalance);
	checkAccCurrentBalance.textContent = updateBalance;
});

checkAccWithdrawButton.addEventListener("click", function(){
	console.log ("withdraw button clicked");
	var userInputNum = Number(checkAccUserInputStr.value);
	var checkBalance = Number(checkAccCurrentBalance.textContent);
	var savingsBalance = Number(savingsAccCurrentBalance.textContent);
	console.log(savingsBalance);

	if (checkBalance>userInputNum){
		var updateBalance = savingsWithdrawal(checkBalance, userInputNum);
		console.log ("checkBalance is " + updateBalance);
		checkAccCurrentBalance.textContent = updateBalance;
	} else {
		var updateCheckingBalance = 0;
		checkAccCurrentBalance.textContent = updateCheckingBalance;
		console.log ("checking balance is " + updateCheckingBalance);
		var overdraft = Math.abs(checkBalance - userInputNum);
		var updateSavingsBalance = savingsWithdrawal (savingsBalance, overdraft);
		savingsAccCurrentBalance.textContent = updateSavingsBalance;
		console.log ("savings balance is " + updateSavingsBalance);
	}
});