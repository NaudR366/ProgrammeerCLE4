
//random location
function randomCords {
}
    let y = Math.floor(Math.random() * 1000);
    let x = Math.floor(Math.random() * 700);


 //random fish color
 let fishColor = Math.floor(Math.random() * 10000);

// vis element
let fish = document.createElement("fish")
document.body.appendChild(fish)
fish.style.transform = `translate(${x}px, ${x}px)`
fish.style.filter = `hue-rotate(${fishColor}deg)`

// bubble element
let bubble = document.createElement("bubble")
document.body.appendChild(bubble)
bubble.style.transform = "translate(10vw, 100vh)"


for (i = 0; i < 50; i++) {
    let fish = document.createElement("fish")
document.body.appendChild(fish)
fish.style.transform = `translate(${x}px, ${x}px)`
fish.style.filter = `hue-rotate(${fishColor}deg)`
    i++
}