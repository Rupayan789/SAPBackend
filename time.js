const addTime = (initial) => {
    var tempHour = initial.slice(0, -3);
    var tempMin = initial.slice(3, 5);
    var minutes = parseInt(tempMin, 10);
    var hours = parseInt(tempHour, 10);
  
    minutes += 30;
    if (minutes >= 60) {
      hours++;
      minutes -= 60;
    }
  
    if (minutes < 10) {
      minutes = "0" + minutes.toString();
    }
    if (hours < 10) {
      hours = "0" + hours.toString();
    }
  
    var finalHours = hours + ":" + minutes;
  
    return finalHours;
  };

module.exports = addTime;