//selects random number at start of game. 19-120
$(document).ready(function(){
    var randomValue=Math.floor(Math.random()*101+19);
//appending random number to randomValue
    $("#targetNumber").html(randomValue);

//values for skulls 1-12
let val1=Math.floor(Math.random()*11+1);
let val2=Math.floor(Math.random()*11+1);
let val3=Math.floor(Math.random()*11+1);
let val4=Math.floor(Math.random()*11+1);

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
    randomValue=Math.floor(Math.random()*101+19);
    console.log("reset is working: ", randomValue)
    $('#targetNumber').html(randomValue);
    val1= Math.floor(Math.random()*11+1);
    val2= Math.floor(Math.random()*11+1);
    val3= Math.floor(Math.random()*11+1);
    val4= Math.floor(Math.random()*11+1);
    valueTotal= 0;
    $('#total').html(valueTotal);
    } 
    
    $("#wins").html(wins);
    $("#losses").html(losses);

///I attempted to get a confirm to work here just for fun but...
///couldn't get it to work the way I wanted to so settled with an alert.
    function victor(){
    alert("God Damn, Frankie. I love to watch you work.")
    wins++; 
    $('#wins').html(wins);
    resetGame();   
    }
function loser(){    
      losses++;
      $('#losses').html(losses);
      resetGame()
    }
});       
