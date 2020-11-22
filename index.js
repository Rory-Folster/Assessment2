function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');

    if(name.value.length == 0){
        alert('Please enter an e-mail address.');

    }else if(pw.value.length == 0){
        alert('Please enter a password.');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please enter an e-mail and password.');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created!');
    }
}

function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('You have entered the wrong Username or Password.');
    }
}
