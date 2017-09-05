// Check for Palindromes

// Return true if the given string is a palindrome. 
// Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way 
// both forward and backward, ignoring punctuation, case, and spacing.

var str = "A Toyota! Race fast, safe car! A Toyota!";

var palindromeChecker = function(rawStr) {
	
	var str = cleanString(rawStr);

	for(i=0; i<str.length; i++){
		if(str[i] !== str[str.length-1-i]){
			var result = false;
			return result;
		} else {
			var result = true;
		}
	}
	return result;
}

var cleanString = function (str){
	var lowerCaseString = str.toLowerCase(str);
	var cleanString = lowerCaseString.replace(/[^A-Z0-9]/ig, "");
	return cleanString;
}

var result = palindromeChecker (str);
console.log(result);