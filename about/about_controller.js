function loadBlankPage() {

const bubs = document.getElementById("bubble")

bubs.innerHTML = `
    <article class="about">
    <!-- the about info here from innerHTML -->

    </article>

    <article class="locations">
    
    <!-- the location info here from innerHTML -->

    </article>
`




const aboutLocal = JSON.parse(localStorage.getItem("allList"))
const allAbout = document.getElementsByClassName("about")[0]
const allLocation = document.getElementsByClassName("locations")[0]

allAbout.innerHTML += `
    <h2>${aboutLocal.about.title}</h2>
    <p>${aboutLocal.about.history}</p>
`

for (let j = 0; j < aboutLocal.locations.length; j++) {
        let all = aboutLocal.locations[j]
        allLocation.innerHTML += `
        ${all.url} <img class="card-img" src="${all.img}" width="200px"></a>
        <p>${all.name}</p>
        <p>${all.address}</p>
        <p>${all.number}</p>
        `
    }
}