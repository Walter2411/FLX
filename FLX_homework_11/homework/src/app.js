let rootNode = document.getElementById('root');
let maxItems = 10;
let minSymbol = 1;

rootNode.style.border = 'solid 1px #000';
rootNode.style.width = '80%';
rootNode.style.height = '700px'
rootNode.style.margin= '0 auto';
rootNode.style.position = 'relative';

let title = document.createElement('h1');
title.textContent = 'TODO cat list';
title.style.textAlign = 'center';

let label = document.createElement('div');
label.style.margin = '0 auto';
label.style.display='flex';
label.style.justifyContent = 'center';
label.style.paddingBottom = '2%';

let input_form = document.createElement('input');
input_form.placeholder = 'Add New Action'
input_form.style.width = '80%';
// input_form.style.margin = '5%';
input_form.style.border = 'solid 1px #000';

let add_button = document.createElement('button');
add_button.className = 'material-icons';
add_button.innerHTML = 'add_box';
add_button.style.display = 'block';
add_button.style.marginLeft = '1%';
add_button.disabled = true;

add_button.addEventListener('click', function(){
    let new_item = document.createElement('li');
    new_item.style.listStyle = 'none';
    new_item.style.display = 'flex';
    new_item.style.justifyContent = 'space-between'
    new_item.style.padding = '1%';
    let check = document.createElement('button');
    check.className = 'material-icons';
    check.innerHTML = 'check_box_outline_blank';
    
    let dlt_btn = document.createElement('button')
    dlt_btn.className = 'material-icons';
    dlt_btn.innerHTML = 'delete';

    new_item.textContent = input_form.value;
    new_item.prepend(check);
    new_item.append(dlt_btn);
    list.append(new_item);

    check.addEventListener('click', function(){
        check.innerHTML = 'check_box'
    })

    dlt_btn.addEventListener('click', function(){
        new_item.parentNode.removeChild(new_item);
    })
    let listCalc = document.getElementsByTagName('li');
    console.log(listCalc.length);

  if( listCalc.length >= maxItems){
      add_button.disabled = true;
  }
       
})

input_form.addEventListener('keyup', function(){
    
    if(input_form.value.length>=minSymbol){
        add_button.disabled = false;

    }else{
        add_button.disabled = true;
    }
    
})


let list = document.createElement('ul');
list.style.borderTop = 'solid 2px #000'
list.style.width = '80%';
list.style.margin='0 auto';
list.style.paddingTop = '2%'

let logo = document.createElement('img');
logo.src = '../homework/assets/img/cat.png'
logo.style.width = '20%'
logo.style.display = 'block';
logo.style.bottom = '0';
logo.style.position = 'absolute';
logo.style.left = '40%';


rootNode.append(
    title,
    label,
    list,
    logo
    
)

label.append(
    input_form,
    add_button
);

