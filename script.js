var n = Math.floor(Math.random() * 1000);
var h = Math.floor(n/100) * 100;
var t = Math.floor((n-h)/10) * 10;
var o = n - h - t;
var text = "Randomly generated number: ";
var ran = text.concat(n, " <\p>")
var d = new Date();
document.write(ran);
document.write("Breakdown: " + h + ", " + t + ", " + o + "<\p>");
document.write(d);