var initLigth = document.getElementById("ligth");
var initialize = true;

let imgRotate = document.getElementById("ligth");
let angle = 180;

imgRotate.style.transform = `rotate(${angle}deg)`;


initLigth.addEventListener("click", function () {

    var body = document.body; 
    
    if (initialize) {
        initialize = false;
        initLigth.src = "ligthoff.jpg";

        body.style.background = "black";
    }

    else {
        initialize = true;
        initLigth.src = "ligthon.jpg";

        body.style.background = "white";
    };
});


