const about = {
    "title": "All About that Spool life",
    "history": "In a land, oh so far away, an idea came to mind to combine the best of two worlds. How great would it be to incorporate Spas into Pools?? After many late nights, it grew to be more and more possible. Every pool would have the kick ass features of a spa. So here, you have SPOOLS and all the accessories you could dream of. You didn't know you needed it till you experience this amazing new way of life."
} 

const locations = [
    { 
        "img": "nashville.png",
        "name": "Nashville, TN",
        "address": "2273 Gunbarrel Rd, Nashville, TN",
        "number": "615-555-7612",
        "url": `<a href="https://www.google.com/maps/@36.1482537,-86.7799367,13.21z" target="_blank">`
    },
    { 
        "img": "italy.png",
        "name": "Genoa, Italy",
        "address": "RT 40 Number 4",
        "number": "+0 8736372 890",
        "url": `<a href="https://www.google.com/maps/@44.364503,8.6514631,7.72z" target="_blank">`
    },
    { 
        "img": "longbeach.png",
        "name": "Long Beach, CA",
        "address": "1402 Spool St",
        "number": "1-800-SOSPOOL",
        "url": `<a href="https://www.google.com/maps/@33.7250526,-118.054145,9.24z" target="_blank">`
    }
]

const aboutList = []

aboutList.push(about, locations)


let aboutDatabase = {
    "about": about,
    "locations": locations
}

const aboutString = JSON.stringify(aboutDatabase) 
localStorage.setItem("allList", aboutString)