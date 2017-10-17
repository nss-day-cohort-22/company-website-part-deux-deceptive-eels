function loadBlankPage() {

const aboutLocal = JSON.parse(localStorage.getItem("allList"))
const allAbout = document.getElementsByClassName("about")[0]
const allLocation = document.getElementsByClassName("locations")[0]

allAbout.innerHTML += `
    <p>${aboutLocal.about.title}</p>
    <p>${aboutLocal.about.history}</p>
`

for (let j = 0; j < aboutLocal.locations.length; j++) {
        let all = aboutLocal.locations[j]
        allLocation.innerHTML += `
        ${all.url} <img src="${all.img}" width="200px"></a>
        <p>${all.name}</p>
        <p>${all.address}</p>
        <p>${all.number}</p>
        `
    }
}