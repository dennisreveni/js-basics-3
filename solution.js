function range(start, end, step) {
	step = step ? step : 1;
	if ((end-start)*step > 0) {
    	var rangeArr = [];
    	for (i=start; i<=end; i+=step){
        	rangeArr.push(i);
    	}
    	return rangeArr;  
	}else {return false;}                
}

function sum(numbers) {
    var result = 0;                  
    for (i=0; i<numbers.length; i++){
       var arrItem = parseInt(numbers[i]);
       result += (!isNaN(arrItem)) ? arrItem : 0;
    }
    return result;
}

function reverseArray(arr) {
    var newArr = [];
    for (i=1; i<=arr.length; i++){
        newArr.push(arr[arr.length-i]);
    }
    return newArr
} 


function reverseArrayInPlace(arr) {
    var tempArray = [];
    for (i=1; i<=arr.length; i++){
        tempArray.push(arr[arr.length-i]);
    }
	for (i=0; i<tempArray.length; i++){
		arr[i] = tempArray[i];	
	}
	return arr;
}

function arrayToList(arr) {
	var list = null;
	for (i=0; i<arr.length; i++) {
		list = prepend(arr[i], list);
	}
	return list;
}

 function listToArray(list) {
	var newArr = [];
	function toArr(list) {
		newArr.push(list.value);
		return (list.rest) ? toArr(list.rest) : newArr
	}
	toArr(list);
	return newArr;
}

function prepend(item, list) {
	return {value: item, rest: list};
}

function nth(n, list) {
	if (n == 0) {
		return list.value;
	} else if (list.rest == null) {
		return undefined;
	} else {
		return nth(n - 1, list.rest);
	}
}

/*var list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: {
				value: 4,
				rest: null
			}
		}
	}
}

console.log(nth(3, list))*/

function deepEqual(a, b) {
	if (a !== null && b !== null && typeof a === 'object' && typeof b === 'object') {
		if (Object.getOwnPropertyNames(a).length !== Object.getOwnPropertyNames(a).length) {
			return false;
		}

		for (i = 0; i < Object.getOwnPropertyNames(a).length; i++) {
			if (!b.hasOwnProperty(Object.getOwnPropertyNames[i])) {
				return false;
			} else if (!deepEqual(a[Object.getOwnPropertyNames(a)[i]], b[Object.getOwnPropertyNames(a)[i]])) {
				return false;
			}
		}
		return true;
	} else {
		return a === b;
	}
}

module.exports = {
  range: range,
  sum: sum,
  reverseArray: reverseArray,
  reverseArrayInPlace: reverseArrayInPlace,
  arrayToList: arrayToList,
  listToArray: listToArray,
  prepend: prepend,
  nth: nth,
  deepEqual: deepEqual
}
