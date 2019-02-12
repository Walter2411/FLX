function addOne(x){
    return x+1;
}

function pipe(value){
    let number = value;
    for(let i=1; i<arguments.length; i++){
        number = arguments[i](number);
    }
    return number;

}
pipe(1, addOne);
