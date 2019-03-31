// set need global variables to be able to start the game.
// set computer random choice between the specified figure 19-120.
// wins and loses need to begin at zero to begin the game.
// crystals need to be assigned a function to derive random numbers.
// the numbers for the computer need to be tallied in the random score box.
// when player either hits the correct number, or goes over the random number, add win or add loss.
// when clicking on any crystal, there should be adding each number as a result of the previous .on click event.
// set each crystal to generate a random number from 1-12.
// make sure the HTML is updated - .text.
// creat alert for winner or loser.
// BE SURE TO CONSOLE.LOG!

    // globals to start the game.
    var wins = 0;
    var losses = 0;
    var yourScore = 0;
    var ranNum;

    // linking buttons to the id's of each crystal on the html.
    var green_button = $("#green_crystal");
    var yellow_button = $("#yellow_crystal");
    var blue_button = $("#blue_crystal");
    var purple_button = $("#purple_crystal");

    // this function will operate when the game starts.
function gameStart() {
    ranNum = Math.floor(Math.random() * 101) + 19;
    $("#random-number").text(ranNum);
    // console.log(ranNum);

    green_button = Math.floor(Math.random() * 12) + 1;
    yellow_button = Math.floor(Math.random() * 12) + 1;
    blue_button = Math.floor(Math.random() * 12) + 1;
    purple_button = Math.floor(Math.random() * 12) + 1;

    yourScore = 0; 
    // console.log(green_button);
     
}
    // on click functions for each button.
$("#green_crystal").on("click", function () {
    $("#green_crystal").text(green_button);
    yourScore += green_button;
    $("#player_score").text(yourScore);
    // console.log(green_button);
    // console.log(yourScore);
});

$("#yellow_crystal").on("click", function () {
    $("#yellow_crystal").text(yellow_button);
    yourScore += yellow_button;
    $("#player_score").text(yourScore);
});

$("#blue_crystal").on("click", function () {
    $("#blue_crystal").text(blue_button);
    yourScore += blue_button;
    $("#player_score").text(yourScore);   
});

$("#purple_crystal").on("click", function () {
    $("#purple_crystal").text(purple_button);
    yourScore += purple_button;
    $("#player_score").text(yourScore);  
});
    // Checking to see if it is a winner or loser here.
$(".images").on("click", function () {
    if (yourScore === ranNum) {
        wins++;
        $("#wins").text(wins);
        alert("You Win!");
        gameStart();
    }
    else if (yourScore > ranNum) {
        losses++;
        $("#losses").text(losses);
        alert("You lose!");
        gameStart();
    }
});

gameStart();
