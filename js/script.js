// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function() {
let myChoice = $("#input").val();
$("#userChoice").html(myChoice);
let x = computerChoice();
$("#computerChoice").html(x);
}

,);

function computerChoice (){
    let otherChoice = Math.random();

if (otherChoice >= 0.66) {
  return "rock";
}
 if (otherChoice < 0.66 && otherChoice > 0.33) {
    return "paper";
  } else if (otherChoice <= 0.33) {
      return "scissors";
    }
}



