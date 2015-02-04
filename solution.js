function range(start, end, step) {
  var rangeArr = [];
  start = parseInt(start) ? parseInt(start) : 1;
  end = parseInt(end) ? parseInt(end) : 99;
  step = parseInt(step) ? parseInt(step) : 1;
  if(step<0){
    if (start<end){
      return range(end, start, -step);
    }else{
      return range(start, end, -step);
    }
  }else{
    if (start<end){
      for (i=start; i<=end; i+=step){
        rangeArr.push(i);
      }
      return rangeArr;
    }else{
      for (i=start; i>=end; i=i-step){
        rangeArr.push(i);
      }
      return rangeArr;
    }
  }
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

function listToArray(list) {
	var newArr = [];
	function toArr(list) {
		newArr.push(list.value);
		return (list.rest) ? toArr(list.rest) : newArr
	}
	toArr(list);
	return newArr;
}

function arrayToList(arr) {
	var list = null;
	for (i=arr.length-1; i>=0; i--) {
		list = prepend(arr[i], list);
	}
	return list;
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

function deepEqual(a, b) {
	if (a !== null && b !== null && typeof(a) === 'object' && typeof(b) === 'object') {
		var a_prop = Object.getOwnPropertyNames(a);
    	var b_prop = Object.getOwnPropertyNames(b);
    
    	if(a_prop.length !== b_prop.length){
      		return false;
    	}else{
      		for (a_prop in a){
        		if (a_prop in b){
          			return deepEqual(a[a_prop], b[a_prop]) ;
        		}else{
          			return false;
        		}
      		}
    	}
    
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
