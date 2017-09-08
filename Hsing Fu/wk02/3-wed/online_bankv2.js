console.log ("Show Me The Money - monolith");

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



// consider navigating dom tree using getElements, rather than repeating code?
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
		return ":(";
	}
};

var newBalanceAfterDeposit = function(accountTypeAndBalance, userInputStr){
	var userInputNum = Number(userInputStr.value);
	var balance = Number(accountTypeAndBalance.textContent);
	var updateBalance = balance + userInputNum; // DEPOSIT
	return updateBalance
}

savingsAccDepositButton.addEventListener("click", function(){
	var newBalance = newBalanceAfterDeposit(savingsAccCurrentBalance,savingsAccUserInputStr)
	savingsAccCurrentBalance.textContent = newBalance;
});

savingsAccWithdrawButton.addEventListener("click", function(){
	var userInputNum = Number(savingsAccUserInputStr.value);
	var balance = Number(savingsAccCurrentBalance.textContent);
	var updateBalance = savingsWithdrawal(balance, userInputNum);
	savingsAccCurrentBalance.textContent = updateBalance;
});

//-------------------------CHECKING ACCOUNT---------------------------//
var checkAccCurrentBalance = document.querySelector('.checking #balance');
var checkAccUserInputStr = document.querySelector('.checking #userInput');
var checkAccWithdrawButton = document.querySelector(".checking #withdraw");
var checkAccDepositButton = document.querySelector(".checking #deposit");


checkAccDepositButton.addEventListener("click", function(){
	var userInputNum = Number(checkAccUserInputStr.value);
	var balance = Number(checkAccCurrentBalance.textContent);
	var updateBalance = balance + userInputNum;
	checkAccCurrentBalance.textContent = updateBalance;
});

checkAccWithdrawButton.addEventListener("click", function(){
	var userInputNum = Number(checkAccUserInputStr.value);
	var checkBalance = Number(checkAccCurrentBalance.textContent);
	var savingsBalance = Number(savingsAccCurrentBalance.textContent);
	console.log(savingsBalance);

	if (checkBalance>userInputNum){
		var updateBalance = savingsWithdrawal(checkBalance, userInputNum);
		checkAccCurrentBalance.textContent = updateBalance;
	} else {
		var updateCheckingBalance = 0;
		checkAccCurrentBalance.textContent = updateCheckingBalance;
		var overdraft = Math.abs(checkBalance - userInputNum);
		var updateSavingsBalance = savingsWithdrawal (savingsBalance, overdraft);
		savingsAccCurrentBalance.textContent = updateSavingsBalance;
	}
});