var userName = prompt('Welcome to the site. What is your name?');

alert('Hi there ' + userName + '. Welcome to a website about two fabulous artists. I hope you enjoy it!');

if (userName == 'Peyton'){
    document.write('<h3>' + 'Welcome, Sondheims biggest fan' + '</h3>');
} else {
    document.write('<h3>' + 'Welcome, ' + userName + '</h3>')
}

