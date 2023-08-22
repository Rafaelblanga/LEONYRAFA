var number

function start(){
 number = Math.floor(Math.random() * 100) + 1;
 //delete the button once its pressed
    var button = document.getElementById("start");
    button.parentNode.removeChild(button);
    //create a new button that restarts
    var button2 = document.createElement("button");
    button2.innerHTML = "Guess";
    button2.setAttribute("id", "Guess");
    button2.setAttribute("onclick", "check()");
    document.body.appendChild(button2);
}


var cont = 1;
function check() {
   var guessInput =  document.getElementById("GuessBox")
   var guess = parseInt(guessInput.value);
   do{ 
   if (guess < number){
    alert("Too low, try again")
    cont++;
    break;
   }
  else if(guess > number){
    alert("Too high, try again")
    cont++;
    break;
  }
  else if (number == guess){
    alert("Correct number")
    var button = document.createElement("button");
    button.innerHTML = "Restart";
    button.setAttribute("id", "restart");
    button.setAttribute("onclick", "restart()");
    document.body.appendChild(button);
    var button = document.getElementById("Guess");
    button.parentNode.removeChild(button);
    break;
  }
    else{   
    alert("Please enter a number")
    
    }
} while (guess != number)
}

function restart(){
    location.reload();
}



