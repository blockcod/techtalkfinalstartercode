// JavaScript File
// JavaScript File
$( document ).ready(function() {
    $('#button').click(function(){
        
var answer = $("#pet").val();
if( answer === "3"){
    $(".h6").html("Yup!");
}
    else {
$(".h6").html("Nope!");
}
    

    });

//MINESWEEPER

//ROCK PAPER SCISSORS
$('#r').click(function(){
    var choice = ["Rock", "paper", "scissor"]
   var num = Math.floor(Math.random()*2);
   var answer = choice[num]
    alert("The computer chose " + answer)
    if(answer === choice[0])
    {
        alert("You tied!")
    }
}
)
});
