
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


function stars(){
    let starNumber = prompt('How many music notes should be on the page? Enter a number between 1 and 20');
 
    while (starNumber < 1 || starNumber > 20){
        if (starNumber < 1){
            alert('Sorry, too low.')
            starNumber = prompt('How many music notes should be on the page? Enter a number between 1 and 20');
        } else if (starNumber > 20){
            alert('Sorry. Too high.')
            starNumber = prompt('How many music notes should be on the page? Enter a number between 1 and 20');
        } else{
            break;
        }
        }
        return starNumber;
    }


let moo = stars();


let numberOverall = moo
for(let i =0; i < numberOverall; i++){
    document.write('<img src = "not.png">' + '</img>');
}