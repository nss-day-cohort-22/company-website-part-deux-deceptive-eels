// Get spool accessory info and parse it from a string
const accessParse = JSON.parse(localStorage.getItem("productList"))
//Alert box for buy button
function myAccessFunction(){
    alert("This accessory was added to your cart!");
}

//function to use on main index.html page
function loadAccessPage (loopNumber) {



// Get access class from HTML

const accessEl = document.getElementById("bubble")

//Get sentence info and parse it into a string
/*const accessSentence = JSON.parse(localStorage.getItem("sentenceArray"))
const sentenceEl = document.getElementsByClassName("productList")[0] */



//Random Sentence Generator into the DOM
accessEl.innerHTML += `<article class=random-sentence> <p>${sentence()}</p> </article>`

// For loop to iterate through the database and spit out the info  

    for (var index = loopNumber; index < loopNumber + 4; index++) {
        var accessElement = accessParse[index];
        
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
    bubble.innerHTML += `<div class="pag-bar">`
    switch(loopNumber){
        case 0: bubble.innerHTML += `
        <div class="pagination">
        
        <a href="#" class="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">&rsaquo;</a>
      </div>
        `
        break

        case 4: bubble.innerHTML += `
        <div class="pagination">
        <a href="#">&lsaquo;</a>
        <a href="#">1</a>
        <a href="#" class="active">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">&rsaquo;</a>
      </div> `
      break

        case 8: bubble.innerHTML +=  `
        <div class="pagination">
        <a href="#">&lsaquo;</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#" class="active">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">&rsaquo;</a>
      </div>
        `
        break

        case 12: bubble.innerHTML += `
        <div class="pagination">
        <a href="#">&lsaquo;</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#" class="active">4</a>
        <a href="#">5</a>
        <a href="#">&rsaquo;</a>
      </div>
        `
        break 

        case 16: bubble.innerHTML += `
        <div class="pagination">
        <a href="#">&lsaquo;</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#" class="active">5</a>
      </div>
        `
        break
}
bubble.innerHTML += `</div>`
    
}


