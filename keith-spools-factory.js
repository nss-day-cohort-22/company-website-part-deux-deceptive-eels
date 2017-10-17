const spoolOne = {
    "Name":"Lights Up",
    "Price":"About tree-fiddy.",
    "Info":"If you like light up pools, but spend all your money on the Home Shopping Network, then we have a deal for you, ya cheapskate!",
    "Image":`<img src="spools/img/pool1.jpg" width="75%" height="500" onMouseover="src='spools/img/pool2.jpg'" onMouseout="src='spools/img/pool1.jpg'">`
}

const spoolTwo = {
    "Name":"Spitting Water",
    "Price":"9999.99",
    "Info":"If for some reason you like water jets above you and you wanna shower in your pool, but it just is too intimidating, then we have the option for you, you coward.",
    "Image":`<img src="spools/img/pool3.jpg" width="75%" height="500" onMouseover="src='spools/img/pool4.jpg'" onMouseout="src='spools/img/pool3.jpg'">`
}

const spoolThree = {
    "Name":"High up",
    "Price":"The price of a Boeing 747 + 200 Gallons Oklahoma water.",
    "Info":"We heard you liked being high up and swimming. We took that to heart and did one better.",
    "Image":`<img src="spools/img/pool5.jpg" width="75%" height="500" onMouseover="src='spools/img/pool6.jpg'" onMouseout="src='spools/img/pool5.jpg'">`
}

const spoolFour = {
    "Name":"Dangerous Pools",
    "Price":"If you have to ask, you can't afford it.",
    "Info":"Ask yourself. Have you ever thought to yourself, 'I wanna swim with my life on the line.' Does that make you think, 'I need to do that!', then we have the pool for you.",
    "Image":`<img src="spools/img/pool7.jpg" width="75%" height="500" onMouseover="src='spools/img/pool8.jpg'" onMouseout="src='spools/img/pool7.jpg'">`
}



const spoolHold = []

spoolHold.push(spoolOne, spoolTwo, spoolThree, spoolFour)

const stringySpool = JSON.stringify(spoolHold)
localStorage.setItem("spoolData", stringySpool)



// function rollover1(firstSpoolImg){
//     firstSpoolImg = 'img/pool2'

// }

// function mouseaway1(firstSpoolImg){
//     firstSpoolImg = 'pool1'
// }