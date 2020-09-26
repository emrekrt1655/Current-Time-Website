// The getHours() method is used to get the hour for a given date, according to local time. The value returned by getHours() is an integer between 0 and 23.

// The getMinutes() method is used to get the minutes in the specified date according to local time. The value returned by getMinutes() is an integer between 0 and 59.

// The getSeconds() method is used to get the seconds in the specified date according to local time. The value returned by getSeconds() is an integer between 0 and 59.


const getmyhour = document.getElementById("date");
getmyhour.addEventListener("click", utchour)

function utchour() {
  var today = new Date();
  var h = today.getHours();
  // in-order to convert it to 12 hours format you can take % 12 on the current time.
  // If the time is 13 then 13%12 → 1
  // time = 23 then 23%12 →11
  // time = 24, then 24%12 → 0 , if the time is 0, then change the time as 12.
  var AmOrPm = h >= 12 ? 'pm' : 'am';
  h = (h % 12) || 12; 
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  h = checkTime(h);
  document.getElementById("date").innerHTML = h + ":" + m + ":" + s + " " + AmOrPm;
  var t = setTimeout(utchour, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
