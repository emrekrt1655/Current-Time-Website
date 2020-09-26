// The getDay() method returns the day of the week (from 0 to 6) for the specified date.

// Note: Sunday is 0, Monday is 1, and so on.


const button_day = document.getElementById("btn1");
button_day.addEventListener("click", function(){
    document.getElementById("info").innerHTML = "The current " + button_day.value + " in your local zone  is ";
    document.getElementById("link").innerHTML = "Click to see how to display the " + button_day.value + " in Js ";
    document.getElementById("link").setAttribute("href", "#")
})
button_day.addEventListener("click", current_day)

function current_day() {
    var d = new Date();
    var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  
  let myDay = document.createElement("span");
    myDay.innerHTML = n;
    document.getElementById("info").appendChild(myDay);
  }