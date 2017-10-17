function clearElement(htmlElement) {
	htmlElement.innerHTML = ""	
}



var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// Get the button that opens the accessory modal
var accBtn = document.getElementById("accessory");
// Get the button that opens the location modal
var localBtn = document.getElementById("store");
// Get the button that opens the safety modal
var warningBtn = document.getElementById("warning");

// Get the modal contents
const bubbleElement = document.getElementById("bubble")


// When the user clicks on the button, open the modal 
accBtn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on the button, open the modal 
localBtn.onclick = function() {
	modal.style.display = "block";
}

// When the user clicks on the button, open the modal 
warningBtn.onclick = function() {
	modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
	clearElement(bubbleElement)
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}