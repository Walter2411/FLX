function isBigger(numOne, numTwo){
    return numOne > numTwo;
}

function isSmaller(numOne,numTwo){
    return numOne ===numTwo ? false : !isBigger(numOne,numTwo);
}
isSmaller(5,-1);