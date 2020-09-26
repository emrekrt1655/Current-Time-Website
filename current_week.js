const button_week = document.getElementById("btn2");
  button_week.addEventListener("click", function(){
      document.getElementById("info").innerHTML = "The current " + button_week.value + " in your local zone  is ";
      document.getElementById("link").innerHTML = "Click to see how to display the " + button_week.value + " in Js ";
      document.getElementById("link").setAttribute("href", "https://github.com/emrekrt1655/Current-Time-Website/blob/master/current_week.js")
  
  })

  button_week.addEventListener("click", current_week)

  function current_week(){
    const d = new Date();
    let yearStart = +new Date(d.getFullYear(), 0, 1);
    let today = +new Date(d.getFullYear(),d.getMonth(),d.getDate());
    let dayOfYear = ((today - yearStart + 1) / 86400000);
    let week = Math.ceil(dayOfYear / 7).toString();
    const resWeek = week;
    let myWeek = document.createElement("span");
    myWeek.innerHTML = resWeek;
    document.getElementById("info").appendChild(myWeek);
    
  }