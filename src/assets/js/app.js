window.addEventListener("deviceorientation", function (e) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var x     = event.beta;
  var y    = event.gamma;

  // document.getElementById("content").innerHTML =  "gamma: " + y + "<br />";

  debugx.innerHTML = "x: " + x;
  debugy.innerHTML = "y: " + y;

  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  document.getElementById("content").style.transform = "rotate3d(1, 0, 0, " + x + "deg)";
}, true);