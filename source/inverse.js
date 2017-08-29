// Куклина Нина 
// Вариант 4 // fix

"use strict";

function inverse(arr = [], n = 0) {

    if (!n) {
        return arr.reverse();
    } else {
        let arrBuf = arr.slice();	
        if (n > 0) {
	    let arrReversePart = arr.splice(n,arr.length-n);
            return arr.concat(arrReversePart.reverse());
        } else {
	    let arrReversePart = arr.splice(arr.length+n,-n);
            return arr.reverse().concat(arrReversePart);
        }
    }

}
