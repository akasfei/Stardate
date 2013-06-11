var actualDate, stardate;

var pad = function (num) {
  return (num > 9 ? num.toString() : '0' + num);
}

var set_star_date = function(date) {
  var startDate = new Date(2011, 5, 18, 0, 0, 0, 0);
  var currentDate;
  if (date)
    currentDate = new Date(date);
  else
    currentDate = new Date();
  var stardate_part1 = parseInt((currentDate.getTime() - startDate.getTime())/86400000);
  var stardate_part2 = parseInt((currentDate.getHours()*60*60*1000 + currentDate.getMinutes()*60*1000 + currentDate.getSeconds()*1000 + currentDate.getMilliseconds())/8640000*1.6)
  //stardate_part1 = decToHex(stardate_part1);
  //stardate_part2 = decToHex(stardate_part2);
  $('#stardate').val((stardate_part1 < 999 ? '0' + stardate_part1.toString() : stardate_part1 ) + '.' + stardate_part2.toString(16))
}

var update_date = function() {
  var stardate = $('#stardate').val().split('.');
  var startDate = new Date(2011, 5, 18, 0, 0, 0, 0);
  var time = isNaN(stardate[1]) ? stardate[1].charCodeAt(0) - 87: parseInt(stardate[1]);
  var thisDate = new Date(startDate.getTime() + stardate[0]*86400000 + time*90*60*1000);
  var dateval = thisDate.getFullYear().toString() + '-' + pad(thisDate.getMonth() + 1) + '-' + pad(thisDate.getDate());
  var timeval = pad(thisDate.getHours()) + ':' + pad(thisDate.getMinutes());
  $('#actual-date').val(dateval);
  $('#actual-time').val(timeval);
}

var update_star_date = function() {
  var actual_date = $('#actual-date').val();
  var actual_time = $('#actual-time').val();
  var newdate = new Date(actual_date + ' ' + actual_time);
  set_star_date(newdate);
}

$(document).ready(function (e) {

  set_star_date();
  update_date();

  $('#stardate').change(function (e){
    update_date();
  });

  $('#actual-date,#actual-time').change(function (e){
    update_star_date();
  });
})