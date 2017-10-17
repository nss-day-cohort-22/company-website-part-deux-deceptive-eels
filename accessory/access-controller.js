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

clearElement(accessEl);

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
    accessEl.innerHTML += `<div class="pag-bar">`
    switch(loopNumber){
        case 0: accessEl.innerHTML += `
        <div class="pagination">
        
        <a class="active">1</a>
        <a onclick="loadAccessPage(4)" >2</a>
        <a onclick="loadAccessPage(8)" >3</a>
        <a onclick="loadAccessPage(12)" >4</a>
        <a onclick="loadAccessPage(16)" >5</a>
        <a onclick="loadAccessPage(4)" >&rsaquo;</a>
      </div>
        `
        break

        case 4: accessEl.innerHTML += `
        <div class="pagination">
        <a onclick="loadAccessPage(0)" >&lsaquo;</a>
        <a onclick="loadAccessPage(0)" >1</a>
        <a class="active">2</a>
        <a onclick="loadAccessPage(8)" >3</a>
        <a onclick="loadAccessPage(12)" >4</a>
        <a onclick="loadAccessPage(16)" >5</a>
        <a onclick="loadAccessPage(8)" >&rsaquo;</a>
      </div> `
      break

        case 8: accessEl.innerHTML +=  `
        <div class="pagination">
        <a onclick="loadAccessPage(4)" >&lsaquo;</a>
        <a onclick="loadAccessPage(0)" >1</a>
        <a onclick="loadAccessPage(4)" >2</a>
        <a class="active">3</a>
        <a onclick="loadAccessPage(12)" >4</a>
        <a onclick="loadAccessPage(16)" >5</a>
        <a onclick="loadAccessPage(12)" >&rsaquo;</a>
      </div>
        `
        break

        case 12: accessEl.innerHTML += `
        <div class="pagination">
        <a onclick="loadAccessPage(8)" >&lsaquo;</a>
        <a onclick="loadAccessPage(0)" >1</a>
        <a onclick="loadAccessPage(4)" >2</a>
        <a onclick="loadAccessPage(8)" >3</a>
        <a class="active">4</a>
        <a onclick="loadAccessPage(16)" >5</a>
        <a onclick="loadAccessPage(16)" >&rsaquo;</a>
      </div>
        `
        break 

        case 16: accessEl.innerHTML += `
        <div class="pagination">
        <a onclick="loadAccessPage(12)" >&lsaquo;</a>
        <a onclick="loadAccessPage(0)" >1</a>
        <a onclick="loadAccessPage(4)" >2</a>
        <a onclick="loadAccessPage(8)" >3</a>
        <a onclick="loadAccessPage(12)" >4</a>
        <a class="active">5</a>
      </div>
        `
        break
}
accessEl.innerHTML += `</div>`
    
}


