// The getFullYear() method returns the year (four digits for dates between year 1000 and 9999) of the specified date.



const button_year = document.getElementById("btn4");
button_year.addEventListener("click", function(){
    document.getElementById("info").innerHTML = "The current " + button_year.value + " in your local zone  is ";
    document.getElementById("link").innerHTML = "Click to see how to display the " + button_year.value + " in Js ";
    document.getElementById("link").setAttribute("href", "https://github.com/emrekrt1655/Current-Time-Website/blob/master/current_year.js")
})
button_year.addEventListener("click", current_year)

function current_year() {
    var d = new Date();
    var n = d.getFullYear();
    
    let myYear = document.createElement("span");
    myYear.innerHTML = n;
    document.getElementById("info").appendChild(myYear)
  }