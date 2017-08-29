// Куклина Нина 
// Вариант 4

"use strict";

function inverse() {

    let arr = [];

    for (let i = 0; i < arguments[0].length; i++) {
        arr[i] = arguments[0][i];
    } 

    if (arguments.length === 1 || (arguments.length > 1 && !arguments[1])) {
        return arr.reverse();
    }

    if (arguments.length > 1) {
        const n = arguments[1];
        let arrBuf = arr.slice();	
        if (n > 0) {
            arr = arr.slice(0,n); 
            return arr.concat(arrBuf.slice(n,arrBuf.length).reverse());
        } else {
            arr = arr.slice(n); 
	    return arrBuf.slice(0, arrBuf.length+n).reverse().concat(arr);
        }
    }

}
