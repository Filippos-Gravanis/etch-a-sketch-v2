

function createGrid(numberofBoxes){
    const clearButton = document.querySelector('.clear')
    clearButton.addEventListener('click',()=>clearGrid())
    const newGridButton = document.querySelector('.newGrid')
    newGridButton.addEventListener('click',getUserInput)
    const container = document.querySelector('.gridContainer')
    let boxSize = (700/numberofBoxes) + "px"
    for (let rowNumber =0 ;rowNumber<numberofBoxes;rowNumber++){
        for (let columnNumber =0 ;columnNumber<numberofBoxes;columnNumber++){
            let box = document.createElement('div')
            box.style.backgroundColor = "lightgray"
            box.style.border = "1px solid rgb(51, 51, 51)"
            box.style.display = "inline-block"
            box.style.height = boxSize;
            box.style.width = boxSize;
            box.style.flexShrink = 0
            box.style.flexGrow = 0
            box.addEventListener('mouseover',() =>  {
                box.style.backgroundColor = "rgb(126, 126, 126)"
            })
            container.appendChild(box)
        }
    }


}

function clearGrid (){
    const container = document.querySelector('.gridContainer')
    console.log(container.childElementCount)
    for (let box of container.children){
        box.style.backgroundColor = "lightgray"
    }    

}
function removeGrid(){
    const gridContainer = document.querySelector(".gridContainer")
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

function getUserInput(){
    removeGrid()
    let numberOfBoxes=parseInt(prompt("Number of Boxes in The New Grid"))
    createGrid(numberOfBoxes)
}

createGrid(20)


