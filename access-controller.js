// function loadAcessPage {}

//Alert box for buy button
function myAccessFunction(){
    alert("This accessory was added to your cart!");
}
// Get spool accessory info and parse it from a string

const accessParse = JSON.parse(localStorage.getItem("productList"))
// Get access class from HTML

const accessEl = document.getElementsByClassName("productList")[0]

// For loop to iterate through the database and spit out the info 

for (var key in accessParse) {
    const currentProduct = accessParse[key];
    for (var index = 0; index < currentProduct.length; index++) {
        var element = currentProduct[index];
        
        accessEl.innerHTML +=  ` 
        <section class="key">
        <div class="accessProduct">
          <img class="card-img" src="${element.picture}" alt="Card image" height=300px width= 325px>
          <div class="card-body">
            <h4 class="card-title">${element.name}</h4>
            <p class="card-text">${element.price}</p>
            <p class="card-text">${element.description}</p>
            <button class="access-button" onclick="myAccessFunction()">Buy Now!</button>
          </div> 
        </div>  
        </section>       `

    }

}

