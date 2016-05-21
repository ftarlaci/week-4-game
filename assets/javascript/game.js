var wins = 0;
var losses = 0;
var myResult = 0;
var randomNumber = Math.floor((Math.random()* 120) + 19); // this selects a random number between 19-120
var bluecrystal = Math.floor((Math.random()* 12) + 1);
var yellowcrystal =	Math.floor((Math.random()* 12) + 1);
var redcrystal = Math.floor((Math.random()* 12) + 1);
var greencrystal = Math.floor((Math.random()* 12) + 1);

var addition = function(){
	$('.myResult').append(myResult);
	$('#wins').append(wins);
	$('#losses').append(losses);

}
var restart = function(){
	myResult = 0;
	randomNumber = Math.floor((Math.random()* 120) + 19);
	addition();

}
	
var conditions = function(){
	if(myResult == randomNumber){
		wins = wins + 1;
		restart();
	}
	else if(myResult > randomNumber){
		losses = losses + 1;
		restart();
	}
	else{
		addition();
	}

$('.myResult').append(myResult);
$('.randomNumber').append(randomNumber);

}

$(document).ready(function(){
	$("#bluecrystal").click(function(){
		randomNumber = randomNumber + bluecrystal;
		document.write("randomNumber"); // display randomNumber on screen
		conditions();
	})
	$("#yellowcrystal").click(function(){
		randomNumber = randomNumber + yellowcrystal;
		document.write("randomNumber"); // display randomNumber on screen
		conditions();
	})
	$("#redcrystal").click(function(){
		randomNumber = randomNumber + redcrystal;
		document.write("randomNumber"); // display randomNumber on screen
		conditions();
	})
	$("#greencrystal").click(function(){
		randomNumber = randomNumber + greencrystal;
		document.write("randomNumber"); // display randomNumber on screen
		conditions();
	})

});


