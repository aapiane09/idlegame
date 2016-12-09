//POINTS INCREMENTATION
var points = 0;
var tick;
//Begin incrementation of points
function tickStart () {
  console.log("Incrementation started!");
  tick = window.setInterval(incrementPoints, 3000);
}
function incrementPoints () {
  points += 1;
  console.log("Points incremented!");
  $('#points').text(points);
}
//Stop incrementation
function stopTick () {
  clearInterval(tick);
}
tickStart();
