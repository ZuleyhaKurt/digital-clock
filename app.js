const date = document.querySelector("#date")
const clock = document.querySelector(".unit")
const amm = document.querySelector(".ampm")
var months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];
var days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];
  
function newTime() {
    var today = new Date()
    var dayNumber = today.getDay()
    var day = days[today.getDay()]
    var month = months[today.getMonth()]
    var year = today.getFullYear()
    
    var ampm = today.getHours() < 12
             ? 'AM'
             : 'PM';
   

    var hours= today.getHours() == 0
    ? 12
    : today.getHours() > 12
            ? today.getHours() - 12
            : today.getHours();
    
    
     var minutes = today.getMinutes() < 10 
     ? '0' + today.getMinutes() 
     : today.getMinutes();
    
     var seconds = today.getSeconds() < 10 
     ? '0' + today.getSeconds() 
        : today.getSeconds();
    
    var datescreen = dayNumber + " " + day + " " + month + " " + year
    var time = hours +":"+ minutes +":" + seconds + " "+ampm
    
    date.innerHTML = datescreen 
   clock.innerHTML = time
    
}

newTime()
window.setInterval(newTime, 1000);