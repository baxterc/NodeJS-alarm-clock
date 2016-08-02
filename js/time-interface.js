var Alarm = require('./../js/time.js').timeModule;
function updateTime () {
  $('#time').html(moment().format('h:mm:ss a'));
}



$(document).ready(function(){
  updateTime();
  setInterval(updateTime, 1000);
  $('#alarm-form').submit(function(event){
    event.preventDefault();
    $(".alarm-off").show();
    var alarmTime = new Alarm($("#alarm-set").val());
    var alarm = setInterval(function(){
      if(alarmTime.alarmCheck()) {
        alert("wake up!");
        clearInterval(alarm);
      }
    }, 1000);
    $("#alarm-time").text(alarmTime.time.format('h:mm:ss a'));
    $("#alarm-off").click(function(){
      $('#alarm-time').text("");
      $('.alarm-off').hide();
    });
    $("#snooze-btn").click(function(){
      alarmTime.snooze($("#snooze-amount").val());
      $("#alarm-time").text(alarmTime.time.format('h:mm:ss a'));
    });
  });


});
