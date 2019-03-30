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

$(document).ready(function() {
    var Random = Math.floor(Math.random() * 101 + 19)

    $(randomNumWlBox).text(Random);

    // setting the random number for the crystals //
    var num1 = Math.floor(Math.random() *12 + 1)
    // console.log(num1);
    var num2 = Math.floor(Math.random() *12 + 1)
    // console.log(num2);
    var num3 = Math.floor(Math.random() *12 + 1)
    // console.log(num3);
    var num4 = Math.floor(Math.random() *12 + 1)
    // console.log(num4);

    var userTotalScore = 0;
    var wins = 0;
    var losses = 0;
    // console.log(wins);

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

        function reset() {
            random = Math.floor(Math.random() *101 + 19);
            // console.log (random);
            $("#randomNumberBox").text(randomNumberBox);
            num1 = Math.floor(Math.random() *12 + 1);
            num2 = Math.floor(Math.random() *12 + 1);
            num3 = Math.floor(Math.random() *12 + 1);
            num4 = Math.floor(Math.random() *12 + 1);
            userTotalScore = 0;
            $("#total").text(userTotalScore);
        }

        function wins() {
            alert("You Won!");
            wins++;
            $("#numberwins").text(wins);
            reset();
        }   

        function losses() {
            alert("You Lose!");
            losses++;
            $("#numberLosses").text(losses);
            reset();
        }
        
        $(".green").on("click", function() {
            userTotalScore = userTotalScore + num1;
            $("#userTotalScore").text(total);
            if (userTotalScore === randomNumberBox) {
            wins();
            }
            else if (userTotalScore > randomNumberBox) {
            losses();
        }

        $(".yellow").on("click", function() {
            userTotalScore= userTotalScore + num2;
            console.log(userTotalScore + userTotal);
            $("#totalPoint").text(userTotal);
            if (userTotalScore === randomNumberBox ) {
            wins();
            }
            else if (userTotalScore > randomNumberBox ) {
            losses();
        }       
        
        $(".blue").on("click", function() {
            userTotalScore = userTotalScore + num1;
            $("#userTotalScore").text(total);
            if (userTotalScore ===randomNumberBox) {
            wins();
            }
            else if (userTotalScore > randomNumberBox) {
            losses();
        }
        
        $(".purple").on("click", function() {
            userTotalScore = userTotalScore + num1;
            $("#userTotalScore").text(total);
            if (userTotalScore ===randomNumberBox) {
            wins();
            }
            else if (userTotalScore > randomNumberBox) {
            losses();
        }
    
          });
        });
      });
   });
});

