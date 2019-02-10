let login, password , currentTime;
function checkLogin(){
    login=prompt('Enter your login');
    
    if (login === null || login ===''){
        alert('Canseled')
    }else if(login.length<4){
        alert('I dont know any users having name length less than 4 symbols')
    }else if (login === 'User'|| login === 'Admin'){
        checkPassword();
    }else{
        alert('I dont know you')
    }
}
function checkPassword(){
    password=prompt('Enter your password'); 
    if (login === 'User'&& password ==='UserPass' || login ==='Admin'&& password ==='RootPass'){
        userGreets();
    }else if (password===null||password===''){
        alert('Canceled');
    }else{
        alert('Wrong password');
    }
}

function userGreets(){
    currentTime = new Date().getHours();
    if(currentTime<20){
        alert('Good day, dear '+ login);
    }else{
        alert('Good evening, dear '+ login);
    }
}

function autorization(){
    checkLogin();
}
autorization();