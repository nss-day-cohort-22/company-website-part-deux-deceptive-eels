// <(^-^)>
//Define variables for products to put in controller.js
//Name, picture path, price, and description
//Stringify and store below


const waterPizza = {
    "name": "Water Proof Pizza",
    "picture": "accessory/waterproofpizza.jpg",
    "price" : "$29.99",
    "description" : "Enjoy this large waterproof pizza anytime you want.  Did you drop it in the pool?  No worries, it still tastes pretty good!"

} 

const jesusShoes = {
    "name": "Jesus Shoes",
    "picture": "accessory/sandals.JPG",
    "price": "$189.00",
    "description" : "These shoes will allow you to walk on water!  Please do not try outside a spool.  May not work on lakes or other bodies of water. Try it while enjoying our waterproof pizza!"

}

const pizzaRaft = {
    "name": "Pizza Raft",
    "picture": "accessory/pizzaraft.jpeg",
    "price": "$29.99",
    "description": "Enjoy your waterproof pizza while floating on a pizza raft!"

}

const waterSlide = {
    "name": "Water Slide",
    "picture": "accessory/waterslide.jpg",
    "price": "$159.99",
    "description": "Slide down our awesome water slide while eating our water proof pizza!"
}

const dogHouse = {
    "name": "Floating Dog House",
    "picture": "accessory/floatingdoghouse.jpeg",
    "price": "$129.99",
    "description": "Your dog will love this floating dog house to put in your spool!  Try watching putting your dog in the dog house while enjoying our water proof pizza!"

}

const waterNoodle = {
    "name": "Water Noodle",
    "picture": "acessory/waternoodle.jpg",
    "price" : "$19.99",
    "description" : "Enjoy this beautiful water noodle to try in your Spool!"

} 

const waterProofSausage = {
    "name": "Water Proof Sausage",
    "picture": "accessory/waterproofsausage.jpg",
    "price": "$189.00",
    "description" : "These shoes will allow you to walk on water!  Please do not try outside a spool.  May not work on lakes or other bodies of water. Try it while enjoying our waterproof pizza!"

}

const sausageRaft = {
    "name": "Sausage Raft",
    "picture": "accessory/sausageraft.jpeg",
    "price": "$49.99",
    "description": "Enjoy your waterproof sausage while on this great sausage raft!"

}

const waterDiaper = {
    "name": "Water Diaper",
    "picture": "accessory/waterdiaper.jpeg",
    "price": "$200.99",
    "description": "Slide down our awesome water slide while wearing our awesome water diaper!"
}

const wineGlass = {
    "name": "Wine Glass",
    "picture": "accessory/wineglass.jpg",
    "price": "$129.99",
    "description": "Want to get drunk?!  Here's a wine glass. Buy it now..please."

}

const waterBottle = {
    "name": "Water Bottle",
    "picture": "accessory/waterbottle.jpg",
    "price" : "$49.99",
    "description" : "This is a water bottle.  Made from the hands of Zeus himself."

} 

const waterPants = {
    "name": "Water Pants",
    "picture": "accessory/waterproofpants.jpg",
    "price": "$129.00",
    "description" : "Want to keep your pants on while in the pool?  We have the perfect solution for you!"

}

const waterShorts = {
    "name": "Water Shorts",
    "picture": "accessory/waterproofshorts.jpg",
    "price": "$59.99",
    "description": "Enjoy your waterproof shorts while eating water proof pizza!"

}

const waterShirt = {
    "name": "Water Shirt",
    "picture": "accessory/watersproofshirt.jpg",
    "price": "$159.99",
    "description": "Slide down our awesome water slide while eating our water proof pizza!"
}

const waterHat = {
    "name": "Water Hat",
    "picture": "accessory/waterproofhat.jpg",
    "price": "$129.99",
    "description": "Your dog will love this floating dog house to put in your spool!  Try watching putting your dog in the dog house while enjoying our water proof pizza!"

}

const waterSocks = {
    "name": "Water Proof Socks",
    "picture": "accessory/waterproofsocks.jpeg",
    "price" : "$99.99",
    "description" : "Like swimming with socks on? Then this one is for you!  Water proof socks."

} 

const waterScarf = {
    "name": "Water Proof Scarf",
    "picture": "accessory/waterproofscarf.JPG",
    "price": "$729.00",
    "description" : "Like swimming in sub zero temperatures?  Then this product is for you!  Try our water proof scarf!"

}

const sausageFloat = {
    "name": "Sausage Float",
    "picture": "accessory/sausageraft.jpeg",
    "price": "$29.99",
    "description": "Enjoy your waterproof pizza while floating on a pizza raft!"

}

const waterGlass = {
    "name": "Water Glass",
    "picture": "accessory/waterglass.jpeg",
    "price": "$9.99",
    "description": "Like drinking water?  PERFECT!"
}

const waterGloves = {
    "name": "Water Proof Gloves",
    "picture": "accessory/waterproofgloves.jpg",
    "price": "$329.99",
    "description": "Ever get cold hands while swimming? Try this waterproof gloves."

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