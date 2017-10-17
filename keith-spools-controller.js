function loadSpoolPage(){

    const pullSpoolData = JSON.parse(localStorage.getItem("spoolData"))
    const selectElement = document.getElementById("bubble")

    for (let i =0; i< pullSpoolData.length; i++) {
        let currentType = pullSpoolData[i]
        selectElement.innerHTML += `
        <p>${currentType.Name}</p>
        <p>${currentType.Price}</p>
        <p>${currentType.Info}</p>    
        <p class="image">${currentType.Image} </p>
        <p></p>
        `
    }
}