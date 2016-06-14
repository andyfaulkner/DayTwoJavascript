//Add the on load event
document.addEventListener('load',countLoop,false);

//create the counting loop
function countLoop(){
    for (i = 0, i <= 50, i++){
        document.getElementById("counter").innerHTML = "<div>" + i + "<br></div>";
    }
}