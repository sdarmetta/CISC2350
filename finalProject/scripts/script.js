//declarations
var hamburger = document.querySelector(".hamburger");

// Dropdown function
function dropDown(){
	if(hamburger.classList.contains('is-active')){
		document.querySelector(".dropdown-content").style.display = "block";
	}	
	else{
		document.querySelector(".dropdown-content").style.display = "none";
	}
		
}

//Hamburger Icon funcion
hamburger.addEventListener("click", function(){
	hamburger.classList.toggle("is-active");
	dropDown();
});

