
function askUsername(){
//Ask Username
let userName = prompt('Welcome to the site. What is your name?');
//alert message
alert('Hi there ' + userName + '. Welcome to a website about two fabulous artists. I hope you enjoy it!');
return userName;
}

let get = askUsername();

function checkUsername(){
    if (get == 'Peyton'){
        document.write('<h3>' + 'Welcome, Sondheims biggest fan' + '</h3>');
    } else {
        document.write('<h3>' + 'Welcome, ' + get + '</h3>');
    }
    }
    
checkUsername();


    