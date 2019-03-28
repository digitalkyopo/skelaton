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
    document.querySelector("#switch").addEventListener("click", () => {
        let light = document.getElementsByClassName("night")
        let text = document.getElementById("switch").textContent

        for(let item of light) {
            item.classList.toggle("light")
        }

        if(text === "Lights On") {
            document.getElementById("switch").textContent = "Lights Off"
        } else {
            document.getElementById("switch").textContent = "Lights On"
        }
    })
}

lightSwitch()