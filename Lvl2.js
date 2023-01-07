document.addEventListener("DOMContentLoaded", () => {
    
    let time = 0;
    const Squares = 45;
    
    const cipherAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const cipherCapAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const vowels = "aeiou";

    var tempStore = "";

    var message =`Dear General Birnam Wood, we hope your attack on The Hamlet Wood is a success. Before you commence the attack, make sure your Nineteen Geese are properly equiped with Apples. Good Luck.`;
    var message2 = `Dear General Birnam Wood, we also hope you are not beset by oranges in your encampment at Dunsinane Hill. Good Luck.`
    var encrypted = "";
    var spaceSelected = 1;

    createPuzzle();
    setInterval(updateCounter, 1000);
    encrpt();



    document.addEventListener("keydown", function(event) {

        if (event.defaultPrevented) {
            return;
        }

        for (var i = 0; i < cipherAlphabet.length; i++) {
            if (cipherAlphabet.substring(i, i+1) == event.key || cipherCapAlphabet.substring(i, i+1) == event.key) {
                updateChar(event.key);
            }
        }

        // Handling Special Cases
        if (event.keyCode == 32 || event.key == "Enter") {
            if (spaceSelected < Squares - 15) {
                spaceSelected = Math.ceil(spaceSelected /15) * 15 + 1;
            }              
        }

        if (event.key == "'") {
            updateChar(event.key);
        }

        if (event.key == "Backspace") {
            if (document.getElementById(String(spaceSelected)).textContent == "" && spaceSelected > 1) {
                    spaceSelected--;
                    document.getElementById(String(spaceSelected)).textContent = "";
                }

            else {
                document.getElementById(String(spaceSelected)).textContent = "";
            }              
        }

        if (event.key == "Delete") {
            clearAll();
        }

    });



        let el = document.getElementById("NextLevel");

        if (el.addEventListener) {
            el.addEventListener("click", function() {
                if (collectInput().toLowerCase() == "apples") {
                    console.log("correct");
                    alert("Good Job. Answer Correct");
                    window.location.href = "Lvl3.html";
                }

                else {
                    alert("Not Quite Right. Try Again");                    
                }

            }, false);
        }
    

    function updateCounter() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? "0" + seconds: seconds;

        document.getElementById("counter").innerHTML = `${minutes}:${seconds}`;
        time++;
    }

    function createPuzzle() {

        for (let i = 0; i < Squares; i++) {
            let typeSpace = document.createElement("div");
            typeSpace.classList.add("square");
            typeSpace.setAttribute("id", i + 1);
            document.getElementById("puzzle").appendChild(typeSpace);
        }
    }

    function updateChar(inString) {
        const selected = document.getElementById(String(spaceSelected));
        selected.textContent = inString;
        
        if (spaceSelected < Squares) {
            spaceSelected += 1;
        }
    }

    function clearAll() {
        for(let k = 1; k <= Squares; k++){
            document.getElementById(String(k)).textContent = "";
        }
        spaceSelected = 1;
    }

    function encrpt () {
        for (let a = 0; a < message.length; a++) {

            if (message.substring(a, a+1) == "A") {
                encrypted += "E";
            }

            else if (message.substring(a, a+1) == "E") {
                encrypted += "I";
            }

            else if (message.substring(a, a+1) == "I") {
                encrypted += "O";
            }

            else if (message.substring(a, a+1) == "O") {
                encrypted += "U";
            }

            else if (message.substring(a, a+1) == "U") {
                encrypted += "A";
            }

            else if (message.substring(a, a+1) == "a") {
                encrypted += "e";
            }

            else if (message.substring(a, a+1) == "e") {
                encrypted += "i";
            }

            else if (message.substring(a, a+1) == "i") {
                encrypted += "o";
            }

            else if (message.substring(a, a+1) == "o") {
                encrypted += "u";
            }

            else if (message.substring(a, a+1) == "u") {
                encrypted += "a";
            }

            else if (message.substring(a, a+1) == " " || message.substring(a, a+1) == "," || message.substring(a, a+1) == ".") {
                encrypted += message.substring(a, a+1);
            }

            else {
                
                if (message.substring(a, a+1) == message.substring(a, a+1).toUpperCase()) {
                    for (let b = 0; b < cipherCapAlphabet.length; b++) {
                        if (message.substring(a, a+1) == cipherCapAlphabet.substring(b, b+1)) {
                            encrypted += cipherCapAlphabet.substring((b+19)%26, ((b+19)%26)+1); 
                        }
                    }
                }

                else {
                    for (let c = 0; c < cipherAlphabet.length; c++) {                        
                        if (message.substring(a, a+1) == cipherAlphabet.substring(c, c+1)) {
                            encrypted += cipherAlphabet.substring((c+19)%26, ((c+19)%26)+1); 
                        }
                    }
                }                
            }
        }

        document.getElementById("message").innerHTML = encrypted;
        encrypted = "";
    }

    function collectInput () {
        tempStore = "";
        for (let d = 1; d <= Squares; d++) {
            tempStore += document.getElementById(String(d)).textContent;
        } 
        
        return tempStore;
    }
});