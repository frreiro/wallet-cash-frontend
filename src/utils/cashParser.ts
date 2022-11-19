const cashParser = (money: number) => {
	const numberString = String(money);

	if(numberString.length <= 1) return '0,'.concat('0',numberString);
	if(numberString.length <= 2) return '0,'.concat(numberString);
	
	const stringMoneyCents = numberString.slice(-2);
	const stringMoney = numberString.slice(0,-2);
	
	return stringMoney
		.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
		.concat(',',stringMoneyCents);
};

export {
	cashParser
};