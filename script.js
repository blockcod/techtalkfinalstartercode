// JavaScript File
// JavaScript File
$( document ).ready(function() {
    $('button').click(function(){
        
var answer = $("#pet").val();
if( answer === "3"){
    $(".h6").html("Yup!");
}
    else {
$(".h6").html("Nope!");
}
    

    });

//MINESWEEPER
var choice = ["Rock", "paper", "scissor"]
$('.b').click(function(){
   var num = Math.floor(Math.random()*2);
   var answer = choice[num]
    alert("The answer is" + answer)
}
)
});
