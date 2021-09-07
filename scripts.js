const container = document.getElementById("container");
const resetBtn = document.getElementById("reset");



function defaultGrid(){
    let defaultValue = 16*16;
    for (let i = 0; i < defaultValue; i++){
        const div = document.createElement("div");
        div.classList.add("cell");
        container.appendChild(div);
    }
}
defaultGrid();

function create(){
    let getter = document.getElementById('userInput').value;
    if (getter < 16){
        alert("Error, please enter at least 16 or higher.")
        getter = 0;
    }else if (getter > 64){
        alert("Error, do not enter such a large number");
        getter = 0;
    }else
    container.innerHTML="";
    container.style.setProperty(
        "grid-template-columns", `repeat(${getter}, 2fr)`
    );
    container.style.setProperty(
        "grid-template-rows", `repeat(${getter}, 2fr)`
    );
    getter = getter * getter;
    for (let i = 0; i < getter; i++){
        const div = document.createElement("div1");
        div.classList.add("cell");
        container.appendChild(div);
    }
}


let cont = document.querySelector("#container, div1");
cont.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor=randomNum();
    

    
});



function randomNum(){
  let numGen =  Math.floor(Math.random()*5000).toString(16);
  let numFinal = "#" + numGen;
    return numFinal;

}
