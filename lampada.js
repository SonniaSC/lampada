var initLigth = document.getElementById("ligth");
var initialize = true;

initLigth.addEventListener("click", function() {
  
    if(initialize){
        initialize = false;
        initLigth.src = "ligthoff.jpg";   
    }

    else{
        initialize = true;
        initLigth.src = "ligthon.jpg"; 
    };
  });


