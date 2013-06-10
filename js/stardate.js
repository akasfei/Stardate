var update_star_date = function() {
  var startDate = new Date(2011, 5, 18, 0, 0, 0, 0);
  var currentDate = new Date();
  var stardate_part1 = parseInt((currentDate.getTime() - startDate.getTime())/86400000);
  var stardate_part2 = parseInt((currentDate.getHours()*60*60*1000 + currentDate.getMinutes()*60*1000 + currentDate.getSeconds()*1000 + currentDate.getMilliseconds())/8640000*1.6)
  //stardate_part1 = decToHex(stardate_part1);
  //stardate_part2 = decToHex(stardate_part2);
  var stardate_container = document.getElementById('stardate');
  stardate_container.innerHTML = (stardate_part1 < 999 ? '0' + stardate_part1.toString() : stardate_part1 ) + '.' + stardate_part2.toString(16);
}
update_star_date();
setInterval(update_star_date, 8640000*1.6);