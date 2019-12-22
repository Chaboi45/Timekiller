function time(){
 var today = new Date();
  var hourNow = today.getHours();
  var minuteNow = today.getMinutes();
  var secondNow = today.getSeconds();
  var milNow = today.getMilliseconds();
  
  document.getElementById("Time").innerHTML = "Current Time: " + hourNow + ':' + minuteNow + ':' + secondNow + ':' + milNow;
}
var intervalID = window.setInterval(time, 1);
 


