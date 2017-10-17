//function to use on main index.html page
function loadAcessPage () {

//Alert box for buy button
function myAccessFunction(){
    alert("This accessory was added to your cart!");
}
// Get spool accessory info and parse it from a string

const accessParse = JSON.parse(localStorage.getItem("productList"))
// Get access class from HTML

const accessEl = document.getElementsByClassName("productList")[0]

//Get sentence info and parse it into a string
/*const accessSentence = JSON.parse(localStorage.getItem("sentenceArray"))
const sentenceEl = document.getElementsByClassName("productList")[0] */



//Random Sentence Generator into the DOM
accessEl.innerHTML += `<article class=random-sentence> <p>${sentence()}</p> </article>`

// For loop to iterate through the database and spit out the info  
for (var accessKey in accessParse) {
    const currentProduct = accessParse[accessKey];
    for (var index = 0; index < currentProduct.length; index++) {
        var accessElement = currentProduct[index];
        
        accessEl.innerHTML +=  ` 
        
        <section class="key">
        <div class="accessProduct">
          <img class="card-img" src="${accessElement.picture}" alt="Card image" height=300px width= 325px>
          <div class="card-body">
            <h4 class="card-title">${accessElement.name}</h4>
            <p class="card-text">${accessElement.price}</p>
            <p class="card-text">${accessElement.description}</p>
            <button class="access-button" onclick="myAccessFunction()">Buy Now!</button>
          </div> 
         </div>  
        </section>       `

    }

    
}

}
