var decToHex = function (n) {
  var hex = "";
  var i=1;
  for (;i*16<=n;i*=16) ;
  for (;i>=1;n%=i, i/=16)
  {
    switch ( parseInt(n/i) )
    {
      case 10:
        hex += "a";
        break;
      case 11:
        hex += "b";
        break;
      case 12:
        hex += "c";
        break;
      case 13:
        hex += "d";
        break;
      case 14:
        hex += "e";
        break;
      case 15:
        hex += "f";
        break;
      default:
        hex += parseInt(n/i);
        break;
    }
  }
  return hex;
}

var update_star_date = function() {
  var startDate = new Date(1993, 5, 18, 0, 0, 0, 0);
  var currentDate = new Date();
  var stardate_part1 = parseInt((currentDate.getTime() - startDate.getTime())/86400000);
  var stardate_part2 = parseInt((currentDate.getHours()*60*60*1000 + currentDate.getMinutes()*60*1000 + currentDate.getSeconds()*1000 + currentDate.getMilliseconds())/8640000*1.6)
  stardate_part1 = decToHex(stardate_part1);
  stardate_part2 = decToHex(stardate_part2);
  var stardate_container = document.getElementById('stardate');
  stardate_container.innerHTML = stardate_part1 + '.' + stardate_part2;
}
update_star_date();
setInterval(update_star_date, 864000);