let 
    varNum = 266219,
    result = 1;

let varStr = varNum.toString();

for( i=0; i < varStr.length; i++) {
    result *= varStr[i];
}

console.log(result);

result **=3;

console.log(result.toString().substring(0,2));