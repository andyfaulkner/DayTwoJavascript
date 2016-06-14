//Add the on load event
document.addEventListener('load',countLoop(),false);

//create the counting loop
function countLoop (){
    var i = 1;
    while (i <= 10){
        document.getElementById("counter").innerHTML += i + "<br>";
        i++
    }
}