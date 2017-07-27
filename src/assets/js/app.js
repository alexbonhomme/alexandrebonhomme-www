window.addEventListener("deviceorientation", function (e) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var x     = event.beta;
  var y    = event.gamma;

  // document.getElementById("content").innerHTML =  "gamma: " + y + "<br />";

  debugx.innerHTML = "x: " + x;
  debugy.innerHTML = "y: " + y;

  document.getElementById("content").style.transform = "rotate3d(1, 0, 0, " + (x+90) + "deg) rotate3d(0, 1, 0, " + (y) + "deg)";
}, true);