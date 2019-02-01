//selects random number at start of game. 9-49
$(document).ready(function(){
    var randomValue=Math.floor(Math.random()*40+9);
//appending random number to randomValue
$("#targetNumber").html(randomValue);

//values for skulls
let val1=Math.floor(Math.random()*10+2);
let val2=Math.floor(Math.random()*10+2);
let val3=Math.floor(Math.random()*10+2);
let val4=Math.floor(Math.random()*10+2);

let valueTotal = 0;
let wins = 0;
let losses = 0;
//on clicks
$("#skullOne").on ("click", function(){
    valueTotal = valueTotal + val1;
    console.log("New Total: " + valueTotal);
    $("#total").html(valueTotal); 
          
        if (valueTotal == randomValue){
          victor();
        }
        else if ( valueTotal > randomValue){
          loser();
        }   
  })  
  $("#skullTwo").on ("click", function(){
    valueTotal = valueTotal + val2;
    $("#total").html(valueTotal); 
          
        if (valueTotal == randomValue){
          victor();
        }
        else if ( valueTotal > randomValue){
          loser();
        }   
  })  
  $("#skullThree").on ("click", function(){
    valueTotal = valueTotal + val3;
    $("#total").html(valueTotal); 
          
        if (valueTotal == randomValue){
          victor();
        }
        else if ( valueTotal > randomValue){
          loser();
        }   
  })  
  $("#skullFour").on ("click", function(){
    valueTotal = valueTotal + val4;
    $("#total").html(valueTotal); 
         
        if (valueTotal == randomValue){
          victor();
        }
        else if ( valueTotal > randomValue){
          loser();
        }   
  })
    
function resetGame(){
    randomValue=Math.floor(Math.random()*40+9);
    console.log("reset is working: ", randomValue)
    $('#targetNumber').html(randomValue);
    val1= Math.floor(Math.random()*10+2);
    val2= Math.floor(Math.random()*10+2);
    val3= Math.floor(Math.random()*10+2);
    val4= Math.floor(Math.random()*10+2);
    valueTotal= 0;
    $('#total').html(valueTotal);
    } 
    
    $("#wins").html(wins);
    $("#losses").html(losses);
function victor(){
    if (confirm("God Damn, Frankie. I LOVE TO WATCH YOU WORK.")){
      txt = "They JUST KEEP COMING!"
        wins++; 
      $('#wins').html(wins);
      resetGame();
    }
    else {
        txt= "You need more training!"
    }
    }
    
function loser(){    
      losses++;
      $('#losses').html(losses);
      resetGame()
    }
});       
