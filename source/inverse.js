// Куклина Нина 
// Вариант 4 // fixfix

"use strict";

function inverse(arr = [], n = 0) {

        let arrBuf = arr.slice();	
        if (n >= 0) {
	    let arrReversePart = arr.splice(n, arr.length - n);
            return arr.concat(arrReversePart.reverse());
        } 

	let arrReversePart = arr.splice(arr.length + n, -n);
        return arr.reverse().concat(arrReversePart);
}
