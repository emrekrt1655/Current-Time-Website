// The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time.

// Note: January is 0, February is 1, and so on.




const button_month = document.getElementById("btn3");
button_month.addEventListener("click", function(){
    document.getElementById("info").innerHTML = "The current " + button_month.value + " in your local zone  is ";
    document.getElementById("link").innerHTML = "Click to see how to display the " + button_month.value + " in Js ";
    document.getElementById("link").setAttribute("href", "#")
})
button_month.addEventListener("click", current_month)

function current_month() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
  
    var d = new Date();
    var n = month[d.getMonth()];
    let myMonth = document.createElement("span");
    myMonth.innerHTML = n;
    document.getElementById("info").appendChild(myMonth);
  }