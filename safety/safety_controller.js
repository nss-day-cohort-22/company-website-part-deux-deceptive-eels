
const selectElem = document.getElementById("bubble");

selectElem.innerHTML= `<button type="button" onclick="loadSafety()" >Clicky</button>`


const loadSafety = () =>{
  const pullSafety = JSON.parse(localStorage.getItem("safety"))
  for(let i = 0; i < pullSafety.length; i++) {
    let currentType = pullSafety[i]
    selectElem.innerHTML += `
    <article class="disclaimer">
      <h4>${currentType.Title}</h4>
      <p>${currentType.Tip1}</p>
      <p>${currentType.Tip2}</p>
      <p>${currentType.Tip3}</p>
      <p>${currentType.IMG}</p>
    </article>
    `
  }
}
