const about = {
    "title": "All About that Spool life",
    "history": "In a land, oh so far away, an idea came to mind to combine the best of two worlds. How great would it be to incorporate Spas into Pools?? After many late nights, it grew to be more and more possible. Every pool would have the kick ass features of a spa. So here, you have SPOOLS and all the accessories you could dream of. You didn't know you needed it till you experience this amazing new way of life."
} 

const locations = [
    { 
        "map": "api",
        "name": "Nashville, TN",
        "address": "2273 Gunbarrel Rd, Nashville, TN",
        "number": "615-555-7612"
    },
    { 
        "map": "api",
        "name": "Italy",
        "address": "RT 40 Number 4",
        "number": "+0 8736372 890"
    },
    { 
        "map": "api",
        "name": "Long Beach, CA",
        "address": "1402 Spool St",
        "number": "1-800-SOSPOOL"
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