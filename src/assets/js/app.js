window.addEventListener("deviceorientation", function (e) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  console.log(absolute);
  console.log(alpha);
  console.log(beta);
  console.log(gamma);

  element.style.transform = "rotate3d(1, 0, 0, " + gamma + "deg)";
}, true);