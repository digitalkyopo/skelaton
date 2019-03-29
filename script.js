/*
let lightSwitch = function() {
    console.log("bang")
    document.querySelector(".switch").addEventListener("click", () => {
        let light = document.getElementById("lightSwitch")
        console.log(light)
        light.classList.add("light")
        light.classList.remove("night")
    })
}
*/
let lightSwitch = function() {
    console.log("bang")
    let switchButton = document.querySelector("#switch")
    
    switchButton.addEventListener("click", () => {
        let light = document.getElementsByClassName("night")
        let text = switchButton.textContent

        for(let item of light) {
            item.classList.toggle("light")
        }

        if(text === "Lights On") {
            switchButton.textContent = "Lights Off"
            switchButton.style.backgroundColor = "#ff5b5b"
        } else {
            switchButton.textContent = "Lights On"
            switchButton.style.backgroundColor = "#00ffe9"
        }
    })
}

lightSwitch()