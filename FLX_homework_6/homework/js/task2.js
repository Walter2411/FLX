let amount = prompt('Please, enter your amount value','4950');
let discount = prompt('Please, enter your discount value','30%');
let priceWithDiscount;
let saved;
if(
    amount<0||amount>9999999||discount<0||discount>99||amount===null||
    amount===''||discount===null||discount===''||isNaN(amount)||isNaN(parseInt(discount))
){
    alert('Invalid data');
}else {
    saved = amount/100*parseInt(discount);
    priceWithDiscount = amount - saved;
    alert('Price without discount:'+amount+'\nDiscount:'+discount+
    '\nPrice with discount:'+priceWithDiscount+'\nSaved;'+saved);
    
}