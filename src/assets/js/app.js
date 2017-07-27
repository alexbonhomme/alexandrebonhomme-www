window.addEventListener("deviceorientation", function (e) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var x     = event.beta;
  var y    = event.gamma;

  // document.getElementById("content").innerHTML =  "gamma: " + y + "<br />";

  document.getElementById("content").style.transform = "rotate3d(1, 0, 0, " + y + "deg)";
}, true);