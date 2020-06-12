'use strict';

/* jshint -W097 */
/*global
alert, confirm, console, prompt
*/
{
    console.log("Numbers start with '2' or '4'\n");

    let arr = [];

    for (let i = 1; i < 8; i++) {
        arr[i - 1] = i * 123;
    }
    console.log('arr: ', arr);

    let firstFigure;

    for (let i = 0; i < 7; i++) {
        firstFigure = String(arr[i])[0];
        if (firstFigure == '2' || firstFigure == '4') {
            console.log('arr[' + i + ']: ', arr[i]);
        }
    }
}
//----------------------
{
    console.log("\n\nPrime numbers:");
    
    let primeNumbers = [1],
        isPrimeNumber = true;

    for (let num = 2 ; num < 101; num++) {
        for (let i = 1; i < primeNumbers.length; i++) {
            isPrimeNumber = ! (( num / primeNumbers[i] ) % 1 === 0);
            if (!isPrimeNumber) break; 
        }
        
        if (isPrimeNumber) {
            primeNumbers[primeNumbers.length ] = num;
        } 

    }

    primeNumbers.forEach( element => console.log( `${element}.\t1\t${element}`));
    


}


