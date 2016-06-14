//Add the on load event
document.addEventListener('load',countLoop(),false);

//create the counting loop
function countLoop (){
    var i = 1;
    do {
        document.getElementById("counter").innerHTML += i + "<br>";
        i++
    } while (i <= 10)
}