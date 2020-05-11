window.addEventListener("load", createLife);

//get game element
let game = document.getElementsByTagName("game")[0]
game.addEventListener("click", clickHandler);

//set amount of fish and bubbles
let amount = 100;

//create kill counter var
let killCounter = document.createElement("h1")
killCounter.innerHTML = "Kills: 0"
game.appendChild(killCounter)

function createLife() {
    for (let i = 0; i < amount; i++) {
        let fishInfo = {
            x: getRandomInt(screen.width - 100),
            y: getRandomInt(screen.height -250),
            color: getRandomInt(361)
        }

        //info about location of bubble
        bubbleLocation = {
            x: getRandomInt(screen.width - 50),
            y: getRandomInt(screen.height -250),
        }

        // vis element

        let fish = document.createElement("fish")
        game.appendChild(fish)
        fish.style.transform = `translate(${fishInfo.x}px, ${fishInfo.y}px)`
        fish.style.filter = `hue-rotate(${fishInfo.color}deg)`
        fish.setAttribute("id", i)
        fish.classList.add("fish")

        // bubble element

        let bubble = document.createElement("bubble")
        game.appendChild(bubble)
        bubble.style.transform = `translate(${bubbleLocation.x}px,${bubbleLocation.y}px)`
        bubble.classList.add("bubble")
    }
}

function clickHandler() {
    let target = event.target
    console.log(target)

    //check if target is a fish
    if(target.classList.contains("fish")) {
        target.classList.add("dead")
    }

    //check if target is a bubble
    if(target.classList.contains("bubble")) {
        target.remove()
    }

}

//random number
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
