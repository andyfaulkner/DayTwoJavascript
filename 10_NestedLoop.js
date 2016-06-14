//Add the on load event
document.addEventListener('load',nestedLoop(),false);

//Create the nested loop
function nestedLoop(){
    var j = 0;
    for (var i = 1; i <= 10; i++){
        document.getElementById("counter").innerHTML += i + " ";
            while (j <= 10){
                document.getElementById("counter").innerHTML += i + "<br>";
                j++;
                break;
            }
    }
}