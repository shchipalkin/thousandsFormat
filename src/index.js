function thousandsFormat(num, separator){
	var numArr = String(num).split('').reverse();
	var tempArr = [];
	var groupSize = 3;
	
	for (var i = 0; i < numArr.length; i += groupSize) {
		tempArr.push(numArr.slice(i, i + groupSize));
	}
	
	return tempArr.reduceRight(function(prev, curr) {
  		return prev + curr.reverse().join('') + separator;
	}, '').trim();
}

