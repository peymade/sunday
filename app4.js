function stars(){
    //Ask star number
    let starNumber = prompt('Enter a number between 1 and 20');
    //alert message
    while (starNumber < 1 || starNumber > 20){
        starNumber = prompt('Sorry, please try again and select a number between 1-20.');
    }
    return starNumber;
    }
document.write(starNumber);

let correctAnswer = 7;

    let numberOverall = 9
    for(let i =0; i < numberOverall; i++){
        if (starNumber == correctAnswer){
            alert('Great job. Thanks for answering the question.')
            break;
        } else if (starNumber < correctAnswer){
            alert('Sorry. That number is too low.')
            let starNumber = prompt('Enter a number between 1 and 20');
        } else if (starNumber > correctAnswer){
            alert('Sorry. That number is too high.')
            let starNumber = prompt('Enter a number between 1 and 20');
        }
    }
