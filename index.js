const container = document.querySelector(".container")

for(let i = 0;i<100;i++){
    const colorContainer = document.createElement("div")
    colorContainer.classList.add("container2")
    container.appendChild(colorContainer)
}

const colorContainer2 = document.querySelectorAll(".container2")

generateColors();

function generateColors(){
    colorContainer2.forEach((colorContainer) => {
        const newColorCode = randomColor()
        colorContainer.style.backgroundColor = "#" + newColorCode;
        colorContainer.innerText = "#" + newColorCode
        colorContainer.setAttribute("data-aos", "flip-left",
        "data-aos-easing","ease-out-cubic",
        "data-aos-duration","100");
    })
}

function randomColor(){
    const chars = "0123456789abcdef"
    const colorCodeLength = 6
    let colorCode = ""
    for(let i=0;i<colorCodeLength;i++){
        const randomNum = Math.floor(Math.random() * chars.length)
        colorCode += chars.substring(randomNum, randomNum + 1)
    }
    return colorCode
}