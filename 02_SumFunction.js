var event1 = document.getElementById("button1");
    event1.addEventListener('click',myVars,false);

//Call the sumFunction and send the 3 varibles
function myVars (){
    sumFunction(10,20,30);
}

//Sum of the 3 varibles
function sumFunction(x, y, z) {
    var result = x + y + z;
    document.getElementById("result").innerHTML = result;
}
