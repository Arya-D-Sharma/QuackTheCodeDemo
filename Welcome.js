document.addEventListener("DOMContentLoaded", () => {
    
    
    const images = ["Apple.PNG", "Orange.PNG", "Banana.PNG", "Grapes.PNG", "Pear.PNG"];
    const docImg = document.getElementById("FruitChosen");

    const maxFruit = 5;
    
    fruitObjs = new Array();

    var counter = 1;

    setInterval(createFruit, 1000);
    setInterval(fruitFall, 1000);

    function createFruit() {

        if (fruitObjs.length < maxFruit) {
            let newFruit = document.createElement("img");
            newFruit.classList.add("fruit");
            newFruit.setAttribute("id", "fruit" + String(counter));
            newFruit.setAttribute("alt", " ");
            newFruit.setAttribute("src", `./Images/${images[Math.floor(Math.random() * images.length)]}`);
            newFruit.style.position = "absolute";
            newFruit.style.left = `${Math.floor(Math.random() * 20)}vw`;
            document.getElementById("leftLane").appendChild(newFruit);
            fruitObjs.push(newFruit);
            counter++;
        }          
    }

    function fruitFall() {
        for (var fruit = 0; fruit < fruitObjs.length; fruit++) {
            alert(fruit.style.top)
        }
    }
});