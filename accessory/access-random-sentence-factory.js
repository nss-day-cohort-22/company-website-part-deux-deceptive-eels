// The sentence structure(the arrays)

const interjection = ["Wow ", "Holy Cow ", "Let me tell ya, ", "LOVE LOVE LOVE "];
const noun = ["the spool Pizza Raft .", "these Jesus Shoes.", "that Water Pizza.", "that Dog House."];
const backSentence = ["It saved my life.", "It cured my depression.", "It Made me feel closer to God", "It helped me to stop smoking meth!"];
let sentenceArray = [interjection, noun, backSentence];
//creating a function that runs through the variables
function randGen () {
return Math.floor(Math.random() * 3)

}

function sentence () {
    let random1 = Math.floor(Math.random() * 4)
    let random2 = Math.floor(Math.random() * 4)
    let random3 = Math.floor(Math.random() * 4)
    let content =   interjection[random1] + noun[random2]+ " " + backSentence[random3];
    console.log(content)
    return content

}
sentence();

//store sentence data into local storage
let arrayString = {
    "sentenceArray" : sentenceArray
}

const sentenceString = JSON.stringify(sentenceArray)
localStorage.setItem("sentenceArray", sentenceString)



