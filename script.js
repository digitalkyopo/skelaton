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
        for(let item of light) {
            item.classList.toggle("light")
        }
        document.getElementById("switch").textContent = "Lights Off"
    })
}

lightSwitch()