

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    //var s = today.getSeconds();
    h = checkHours(h);
	m = checkTime(m);
    //s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m; //+ ":" + s
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function checkHours(i) {
	if (i > 12){ i = i - 12};
	if (i === 0){ i = 12 };
	return i;
}