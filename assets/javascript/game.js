// need random box to begin with a number, generate number to begin the game
// set computer random choice between the specified figures
// wins and loses need to begin at zero
// crystals need to be assigned a function to derive random numbers
// the numbers for the computer are tallied in the players score box
// when player either hits the correct number, add win or add loss

// game with 4 crystals. every crystal needs to have a random number. 
// number should be generated every single time a player wins or loses. 
// when clicking on any crystal, there should be a adding with a result 
// until it hits the total score or goes over.
// Every crystal is to have a random number from 1-12.
// if it equals, then the win counter goes up or the losing count goes up.

    // globals to start the game.
    var wins = 0;
    var losses = 0;
    var answer;
    var yourScore = 0;

    // linking buttons to the id's of each crystal on the html.
    var green_button = $("#green_crystal");
    var yellow_button = $("#yellow_crystal");
    var blue_button = $("#blue_crystal");
    var purple_button = $("#purple_crystal");

    // this function will operate when the game starts.
function gameStart() {
    answer = Math.floor(Math.random() * 101) + 19;
    $("#random-number").html(answer);
    // console.log(answer);

    green_button = Math.floor(Math.random() * 12) + 1;
    yellow_button = Math.floor(Math.random() * 12) + 1;
    blue_button = Math.floor(Math.random() * 12) + 1;
    purple_button = Math.floor(Math.random() * 12) + 1;

    yourScore = 0;
    // console.log(green_button);
    // console.log(green_button);
   
}

    // on click functions for each button.
$("#green_crystal").on("click", function () {
    $("#green_crystal").html(green_button);
    yourScore += green_button;
    $("#your-score").html(yourScore);
    // console.log(green_button);
    // console.log(yourScore);
});
$("#yellow_crystal").on("click", function () {
    $("#yellow_crystal").html(yellow_button);
    yourScore += yellow_button;
    $("#your-score").html(yourScore);
    
});
$("#blue_crystal").on("click", function () {
    $("#blue_crystal").html(blue_button);
    yourScore += blue_button;
    $("#your-score").html(yourScore);
   
});
$("#purple_crystal").on("click", function () {
    $("#purple_crystal").html(purple_button);
    yourScore += purple_button;
    $("#your-score").html(yourScore);
   
});
    // Checking to see if it is a winner or loser here.
$(".images").on("click", function () {
    if (yourScore === answer) {
        wins++;
        $("#wins").html(wins);
        alert("You Win!");
        gameStart();
    }
    else if (yourScore > answer) {
        losses++;
        $("#losses").html(losses);
        alert("You lose!");
        gameStart();
    }
});

gameStart();



