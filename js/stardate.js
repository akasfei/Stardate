function Stardate(conf) {
  if (typeof conf !== 'undefined' && typeof conf.origin !== 'undefined'){
    this.origin = conf.origin;
  }
  return this;
}

Stardate.prototype.origin = new Date(Date.UTC(2011, 5, 18, 0, 0, 0, 0));

Stardate.prototype.update = function() {
  var startDate = new Date(Date.UTC(2011, 5, 18, 0, 0, 0, 0));
  var currentDate = new Date();
  this.p1 = parseInt((currentDate.getTime() - this.origin.getTime())/86400000).toString();
  this.p2 = parseInt((currentDate.getUTCHours()*60*60*1000 + currentDate.getUTCMinutes()*60*1000 + currentDate.getUTCSeconds()*1000 + currentDate.getUTCMilliseconds())/8640*6.5536).toString(16);
  this.p1 = this.p1.length > 3 ? this.p1 : this.p1.length > 2 ? '0' + this.p1 : this.p1.length > 1 ? '00' + this.p1 : '000' + this.p1;
  this.p2 = this.p2.length > 3 ? this.p2 : this.p2.length > 2 ? '0' + this.p2 : this.p2.length > 1 ? '00' + this.p2 : '000' + this.p2;
  return this;
}

Stardate.prototype.set = function() {
  this.update();
  var stardate_h = document.getElementById('stardate-h');
  var stardate_s = document.getElementById('stardate-s');
  stardate_h.innerHTML = this.p1;
  stardate_s.innerHTML = this.p2;
  return this;
}

var SD = new Stardate().set();
setInterval(function() {SD.set();}, 86400000/65536);
