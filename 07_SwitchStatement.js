//Add the on load event
document.addEventListener('load',dateTime(),false);

//Create a Date and Time switch function
function dateTime() {
    
    var day = "";
    var today = new Date();
    
    switch (today.getDay()){
        case 0:
            document.getElementById("date").innerHTML = "Today is Sunday";
            break;
        case 1:
            document.getElementById("date").innerHTML = "Today is Monday";
            break;
        case 2:
            document.getElementById("date").innerHTML = "Today is Tuesday";
            break;
        case 3:
            document.getElementById("date").innerHTML = "Today is Wednesday";
            break;
        case 4:
            document.getElementById("date").innerHTML = "Today is Thursday";
            break;
        case 5:
            document.getElementById("date").innerHTML = "Today is Friday";
            break;
        case 6:
            document.getElementById("date").innerHTML = "Today is Saturday";
            break;
        default:
            document.getElementById("date").innerHTML = "Today is not a day!";
            break;
    }
}