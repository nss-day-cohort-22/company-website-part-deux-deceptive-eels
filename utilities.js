
// Clear the HTML contents of a given element
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
// Get the button that opens the spool modal
var spoolBtn = document.getElementById("spool");
// Get the modal contents
let bubbleEle = document.getElementById("bubble")

// Get the modal contents
const bubbleElement = document.getElementById("bubble")


// When the user clicks on the button, open the modal 
accBtn.onclick = function() {
	clearElement(bubbleElement)

	modal.style.display = "block";
    loadAccessPage(0);
}


// When the user clicks on the button, clear and open the modal, then load page
localBtn.onclick = function() {
	clearElement(bubbleElement)
    modal.style.display = "block";
    loadBlankPage()
}

// When the user clicks on the button, clear and open the modal, then load page
warningBtn.onclick = function() {
	clearElement(bubbleElement)
	modal.style.display = "block";
	loadSafety()
}

// When the user clicks on the button, clear and open the modal, then load page
spoolBtn.onclick = function() {
	clearElement(bubbleElement)
	modal.style.display = "block";
	loadSpoolPage()
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