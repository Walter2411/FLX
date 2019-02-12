function getMin(...arr){
    let minNumber = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<minNumber){
            minNumber = arr[i];
        }
    }
    return minNumber;
}
getMin(-1,2,3,-5);