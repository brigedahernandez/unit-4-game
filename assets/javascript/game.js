alert("hello!")

//set an end goal value by computer selecting a random number
var endGoal = getRandomArbitrary(19, 120)
console.log("endGoal: ", endGoal)

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
//assign a random score for each crystal
var crystalone = getRandomArbitrary(1, 12)
var crystaltwo = getRandomArbitrary(1, 12)
var crystalthree = getRandomArbitrary(1, 12)
var crystalfour = getRandomArbitrary(1, 12)

$("#crystalone").data("count", crystalone);
$("#crystaltwo").data("count", crystaltwo);
$("#crystalthree").data("count", crystalthree);
$("#crystalfour").data("count", crystalfour);
//event listener for user click
$("document").ready(function () {
    var userScore = 0
    $(".crystal").on("click", function () {
        console.log($(this).data("count"))
        var crystalCount = $(this).data("count")
        userScore = crystalCount + userScore

        $(".user-score").text(userScore);
        if (userScore === endGoal) {
            wins++
            alert("You win!!")
            endGoal = getRandomArbitrary(19, 120)
            crystalone = getRandomArbitrary(1, 12)
            crystaltwo = getRandomArbitrary(1, 12)
            crystalthree = getRandomArbitrary(1, 12)
            crystalfour = getRandomArbitrary(1, 12)
            userScore = 0
            $(".user-score").text(userScore);
            $(".end-goal").text(endGoal);
        } else if (userScore > endGoal) {
            losses++
            alert("Sorry, try again.")
            endGoal = getRandomArbitrary(19, 120)
            crystalone = getRandomArbitrary(1, 12)
            crystaltwo = getRandomArbitrary(1, 12)
            crystalthree = getRandomArbitrary(1, 12)
            crystalfour = getRandomArbitrary(1, 12)
            userScore = 0
            $(".user-score").text(userScore);
            $(".end-goal").text(endGoal);

        }

    })

    $(".end-goal").text(endGoal);
    $(".user-score").text(userScore);




    //update score counter

    //check if scores are equal, check to see if user score is higher than computer score (which would mean the user loses the game)


    //

    // //while (userScore < endGoal) {
    //     for (i = 0; i < endGoal; i++) {
    //         userScore++
    //     }
    // }

    var wins = 0
    var losses = 0
    //win or lose, game resets




    //after reset, values are reassigned 


})