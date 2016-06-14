//Add the on load event
document.addEventListener('load',dateTime(),false);

//Create a Date and Time switch function
function dateTime() {
    var day = "";
    var today = new Date();
    var hour = today.getHours();
    var mins = today.getMinutes();
    var checkZero = "";
    
//check if minutes less than 10 and change to two digit format if so
    if(mins < 10){
        checkZero = 0;
    }
    
//Switch through days
    switch (today.getDay()){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
           day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "not a day";
            break;
    }
    //Print to screen
document.getElementById("time").innerHTML = "Today is " + day + " and the time is " + hour + ":" + checkZero + mins;
}
