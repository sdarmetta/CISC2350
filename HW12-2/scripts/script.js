//testing console
console.log("hello");

//variables
var atlas = 'Atlas Statue';
var empireState = 'Empire State Building';
var liberty = 'Statue of Liberty';

//logging variables to console
console.log(atlas);
console.log(empireState);
console.log(liberty);

//w3resource.com
//function to return random background color variable
function randomBackGround(){
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);

	var bgColor = "rgb(" + x + "," + y + "," + z + ")";

	console.log(bgColor);

	return bgColor;
	
}

//function to change background color continuously
function changeBackGround(){
	var newBackGround = document.getElementById("full");
	var button = true;

	console.log(newBackGround);

	newBackGround.style.backgroundColor = randomBackGround();
}

function imageClick(url){
	window.open(url);
}