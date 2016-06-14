//Global varible
var countString = "";

//Add the on load event
document.addEventListener('load',countLoop(),false);

//create the counting loop
function countLoop (){
    for (var i = 1; i < 50; i++){
        countString += i + "<br>";
    }

//Print to screen
document.getElementById("counter").innerHTML = countString;
}

