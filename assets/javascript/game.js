alert("hello!")

//set an end goal value by computer selecting a random number
var endGoal = getRandomArbitrary(19, 120) 
console.log ("endGoal: ",endGoal)
function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
//assign a random score for each crystal
var crystalone = getRandomArbitrary(1, 12)
var crystaltwo = getRandomArbitrary(1, 12)
var crystalthree = getRandomArbitrary(1, 12)
var crystalfour = getRandomArbitrary(1, 12)

$( "#crystalone" ).data( "count", crystalone );
$( "#crystaltwo" ).data( "count", crystaltwo );
$( "#crystalthree" ).data( "count", crystalthree );
$( "#crystalfour" ).data( "count", crystalfour );
//event listener for user click
$("document").ready(function(){
    $(".crystal").on("click",function(){
        console.log($(this).data("count"))
    })
})



//update score counter

//check if scores are equal, check to see if uesr score is higher/lower than computer score (which would mean the user loses the game)

//win or lose, game resets

//after reset, values are reassigned 