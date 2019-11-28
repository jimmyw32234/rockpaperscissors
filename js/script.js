// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
    let myChoice = $("#input").val().toLowerCase();
    let randomNum = Math.random();
    $("#userChoice").html(myChoice);
    if(randomNum > 0.66){
        computerResult = "rock";
    } else if(randomNum >= 0.33 && randomNum <= 0.66){
        computerResult = "paper";
    } else {
        computerResult = "scissors";
    }
    $("#computerChoice").html(computerResult);
    if (myChoice == "rock" && computerResult == "scissors" || 
        myChoice == "scissor" && computerResult == "paper" ||
        myChoice == "paper" && computerResult == "rock" ) {

        $("#result").html("win");
    } else if (myChoice == "rock" && computerResult == "paper" || 
                myChoice == "scissor" && computerResult == "rock" ||
                myChoice == "paper" && computerResult == "scissor"
               ) {
        $("#result").html("loss");
    }else{
        $("#result").html("draw");
    }
})
