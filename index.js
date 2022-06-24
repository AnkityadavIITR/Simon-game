

var gamePattern=[];

var buttonColors=["blue","green","red","yellow"];

var level=0;
var started=false;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})


$(".btn").on("click",function(){
    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);

 });
 
      
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(gamePattern.length===userClickedPattern.length){
           setTimeout (function(){
               nextSequence();
           },1000); 
        }
    }else{
            playSound("wrong");
            $(document).addClass("game-over");
            $("#level-title").text("Game Over, Press Any Key to Restart");

            setTimeout(function () {
                $("body").removeClass("game-over");
              }, 200);
        
              startOver();
            }
        }
        
    

function nextSequence(){

    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" +randomChosenColor).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    
}

function playSound(name){
  
    var name=new Audio("sounds/"+ name+ ".mp3");
    name.play();
        
   ;
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
      }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
  



