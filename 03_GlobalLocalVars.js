//declare the global varible
var myVar = "Global";

//Add the on load event
document.addEventListener('load',myPrint(),false);

//Function to declare and print to the dom the local varible of the same name
function myVars(){
    var myVar = "Local"
    document.getElementById("local").innerHTML = myVar;
}

//Print the both varibles to the screen
function myPrint(){
    myVars();
    document.getElementById("global").innerHTML = myVar;
}