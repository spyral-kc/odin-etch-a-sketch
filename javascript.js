//----------------------DECLARE ELEMENTS

const selectBtn = document.querySelector('#select')
const createBtn = document.querySelector('#create')
const resetBtn = document.querySelector('#reset')
const dimensionDiv = document.querySelector('#dimension')
const containerDiv = document.querySelector('#container')

//----------------------DECLARE CONSTANTS

let gridLength 
let containerLength = 500
createBtn.disabled = true

//----------------------SELECT DIMENSION BUTTON   

selectBtn.addEventListener(
    "click", 
    () => {
        let dimension = prompt("Enter grid dimension (max: 100).", 10)
        while (dimension > 100 || dimension < 1) {
            if (dimension === null) {
                return;
            } 
            alert("Invalid dimension. Try again.")
            dimension = prompt("Enter grid dimension (max: 100).", 10)
        } 
        gridLength = dimension;
        dimensionDiv.textContent = `Dimension: ${gridLength}x${gridLength}`;
        createBtn.disabled = false;
    }
)

//----------------------CREATING GRID FXN

let createGrid = function() {

containerDiv.textContent = "";
containerDiv.style.borderColor = "red";
containerDiv.style.borderWidth = "5px";
containerDiv.style.borderStyle = "solid";


let boxLength = (containerLength / gridLength) + "px"

for (let i = 0; i < Math.pow(gridLength,2); i++) {
    let box = document.createElement('div')
    box.id = "box"
    containerDiv.appendChild(box)
}

containerDiv.style.width = containerLength + "px"
containerDiv.style.height = containerLength + "px"

const boxDiv = document.querySelectorAll('#box')
//boxDiv is nodelist, iterate style for all in index

for (let index = 0; index < boxDiv.length; index++) {
    boxDiv[index].style.width = boxLength
    boxDiv[index].style.height = boxLength
}

//MOUSEOVER EVENT

boxDiv.forEach(
    eachBox => eachBox.addEventListener
    ("mouseover", 
    () => eachBox.style.backgroundColor = "black")
)

createBtn.disabled = true
}

//----------------------CREATE GRID BUTTON   

createBtn.addEventListener(
    'click',
    createGrid,
)

//----------------------RESET GRID BUTTON  

function reset() {
    const boxDiv = document.querySelectorAll('#box')
    boxDiv.forEach(
        eachBox => eachBox.style.backgroundColor = "white")
}

resetBtn.addEventListener(
    'click',
    reset
)