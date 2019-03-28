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
        let text = document.getElementById("switch").textContent
        console.log('text: ', text)

        if(text === "Lights On") {
            console.log("Lights are now off")
            text = "Lights Off"
            return text
        } else {
            console.log("Lights are now on")
            text = "Lights On"
            return text
        }

        /*
        switch(text) {
            case "Lights On":
            text = "Lights Off"
            break
            case "Lights Off":
            text = "Lights On"
            break
            default:
            text = "Lights On"
        }
        */
    })
}

lightSwitch()