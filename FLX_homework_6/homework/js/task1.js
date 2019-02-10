let a_value = prompt ('Please,enter your value of a');
let b_value = prompt ('Please,enter your value of b');
let c_value = prompt ('Please,enter your value of c');
let x,x1,x2;
let discriminant = Math.pow(b_value,2)-4*a_value*c_value;

if(
    isNaN(a_value)||isNaN(b_value)||isNaN(c_value)||
    a_value===null||b_value===null||c_value===null||a_value===''||b_value===''||c_value===''
    ){
    alert('invalid input data');
}else if(discriminant<0){
    alert('no solution')
}else if(discriminant===0){
    x=-b_value/2*a_value;
    alert('Result: \n x='+x);
}else{
    x1 = (-b_value + Math.sqrt(discriminant)) / 2 * a_value;
    x2 = (-b_value - Math.sqrt(discriminant)) / 2 * a_value;
    alert('Result: \n x1='+x1+'\n x2='+x2);
    
}