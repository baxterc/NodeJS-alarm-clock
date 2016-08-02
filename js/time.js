function Alarm(time) {
  var timeArray = time.split(":");
  this.time = moment({hour: timeArray[0], minute: timeArray[1]});
}

Alarm.prototype.alarmCheck = function() {
  if ((moment().hour() === this.time.hour()) && (moment().minute() === this.time.minute())) {
    return true;
  } else {
    return false;
  }
};

Alarm.prototype.snooze = function(snoozeTime) {
  this.time.add(snoozeTime, 'minutes');
}

exports.timeModule = Alarm;
