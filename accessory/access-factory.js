// <(^-^)>
//Define variables for products to put in controller.js
//Name, picture path, price, and description
//Stringify and store below


const waterPizza = {
    "name": "Water Proof Pizza",
    "picture": "./waterproofpizza.jpg",
    "price" : "$29.99",
    "description" : "Enjoy this large waterproof pizza anytime you want.  Did you drop it in the pool?  No worries, it still tastes pretty good!"

} 

const jesusShoes = {
    "name": "Jesus Shoes",
    "picture": "./sandals.JPG",
    "price": "$189.00",
    "description" : "These shoes will allow you to walk on water!  Please do not try outside a spool.  May not work on lakes or other bodies of water. Try it while enjoying our waterproof pizza!"

}

const pizzaRaft = {
    "name": "Pizza Raft",
    "picture": "./pizzaraft.jpeg",
    "price": "$29.99",
    "description": "Enjoy your waterproof pizza while floating on a pizza raft!"

}

const waterSlide = {
    "name": "Water Slide",
    "picture": "./waterslide.jpg",
    "price": "$159.99",
    "description": "Slide down our awesome water slide while eating our water proof pizza!"
}

const dogHouse = {
    "name": "Floating Dog House",
    "picture": "./floatingdoghouse.jpeg",
    "price": "$129.99",
    "description": "Your dog will love this floating dog house to put in your spool!  Try watching putting your dog in the dog house while enjoying our water proof pizza!"

}

const waterNoodle = {
    "name": "Water Noodle",
    "picture": "./waterproofpizza.jpg",
    "price" : "$29.99",
    "description" : "Enjoy this large waterproof pizza anytime you want.  Did you drop it in the pool?  No worries, it still tastes pretty good!"

} 

const waterProofSausage = {
    "name": "Jesus Shoes",
    "picture": "./sandals.JPG",
    "price": "$189.00",
    "description" : "These shoes will allow you to walk on water!  Please do not try outside a spool.  May not work on lakes or other bodies of water. Try it while enjoying our waterproof pizza!"

}

const sausageRaft = {
    "name": "Pizza Raft",
    "picture": "./pizzaraft.jpeg",
    "price": "$29.99",
    "description": "Enjoy your waterproof pizza while floating on a pizza raft!"

}

const waterDiaper = {
    "name": "Water Slide",
    "picture": "./waterslide.jpg",
    "price": "$159.99",
    "description": "Slide down our awesome water slide while eating our water proof pizza!"
}

const wineGlass = {
    "name": "Floating Dog House",
    "picture": "./floatingdoghouse.jpeg",
    "price": "$129.99",
    "description": "Your dog will love this floating dog house to put in your spool!  Try watching putting your dog in the dog house while enjoying our water proof pizza!"

}

const waterBottle = {
    "name": "Water Proof Pizza",
    "picture": "./waterproofpizza.jpg",
    "price" : "$29.99",
    "description" : "Enjoy this large waterproof pizza anytime you want.  Did you drop it in the pool?  No worries, it still tastes pretty good!"

} 

const waterPants = {
    "name": "Jesus Shoes",
    "picture": "./sandals.JPG",
    "price": "$189.00",
    "description" : "These shoes will allow you to walk on water!  Please do not try outside a spool.  May not work on lakes or other bodies of water. Try it while enjoying our waterproof pizza!"

}

const waterShorts = {
    "name": "Pizza Raft",
    "picture": "./pizzaraft.jpeg",
    "price": "$29.99",
    "description": "Enjoy your waterproof pizza while floating on a pizza raft!"

}

const waterShirt = {
    "name": "Water Slide",
    "picture": "./waterslide.jpg",
    "price": "$159.99",
    "description": "Slide down our awesome water slide while eating our water proof pizza!"
}

const waterHat = {
    "name": "Floating Dog House",
    "picture": "./floatingdoghouse.jpeg",
    "price": "$129.99",
    "description": "Your dog will love this floating dog house to put in your spool!  Try watching putting your dog in the dog house while enjoying our water proof pizza!"

}

const waterSocks = {
    "name": "Water Proof Pizza",
    "picture": "./waterproofpizza.jpg",
    "price" : "$29.99",
    "description" : "Enjoy this large waterproof pizza anytime you want.  Did you drop it in the pool?  No worries, it still tastes pretty good!"

} 

const waterScarf = {
    "name": "Jesus Shoes",
    "picture": "./sandals.JPG",
    "price": "$189.00",
    "description" : "These shoes will allow you to walk on water!  Please do not try outside a spool.  May not work on lakes or other bodies of water. Try it while enjoying our waterproof pizza!"

}

const sausageFloat = {
    "name": "Pizza Raft",
    "picture": "./pizzaraft.jpeg",
    "price": "$29.99",
    "description": "Enjoy your waterproof pizza while floating on a pizza raft!"

}

const waterGlass = {
    "name": "Water Slide",
    "picture": "./waterslide.jpg",
    "price": "$159.99",
    "description": "Slide down our awesome water slide while eating our water proof pizza!"
}

const waterGloves = {
    "name": "Floating Dog House",
    "picture": "./floatingdoghouse.jpeg",
    "price": "$129.99",
    "description": "Your dog will love this floating dog house to put in your spool!  Try watching putting your dog in the dog house while enjoying our water proof pizza!"

}

/* Template for other products 

let variable = {
    "name" : "",
    "picture": "",
    "price": "",
    "description": ""

}

*/

//Put objects into an array 

let arrayName = [waterPizza, jesusShoes, pizzaRaft, waterSlide, dogHouse, waterProofSausage, waterNoodle, sausageRaft, waterDiaper, wineGlass, waterBottle, waterPants, waterShorts, waterShirt, waterHat, waterSocks, waterScarf, sausageFloat, waterGlass, waterGloves ];

//Store array into an object to creat data base

/* let productList = {
    "arrayName" : arrayName
}  */

const productString = JSON.stringify(arrayName)
localStorage.setItem("productList", productString)