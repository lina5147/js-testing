const isPalindrome = function (text) {

	if (text.length <= 1) return true;

	const newText = text.replace(/[^A-Z0-9]/ig, '').toLowerCase();

	console.log(newText);

	let left = 0;
	let right = newText.length - 1;

	while (left < right) {
		if (newText[left] !== newText[right]) {
			return false;
		}

		left++;
		right--;
	}

	return true;

};

module.exports = isPalindrome;

