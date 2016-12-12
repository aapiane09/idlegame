$('document').ready(function () {
//POINTS INCREMENTATION
var points = 3500;
$('#points').text(points);
var tick;

//MULTIPLIER VARIABLES
var multiplier = 1;
var lowMulti = 2;
var medMulti = 5;
var hiMulti = 10;
$('#multiplier').text(multiplier);

//UPGRADE COST VARIABLES
var lowCost = 200;
var medCost = 500;
var hiCost = 1000;

$('#loUpgrade').click (function lowUp(){
  points = points - lowCost;
  multiplier = multiplier * lowMulti;
  $('#multiplier').text(multiplier);
});
$('#medUpgrade').click (function medUp(){
  points = points - medCost;
  multiplier = multiplier * medMulti;
  $('#multiplier').text(multiplier);
});
$('#hiUpgrade').click (function hiUp(){
  points = points - hiCost;
  multiplier = multiplier * hiMulti;
  $('#multiplier').text(multiplier);
});

//Begin incrementation of points and show tick status via #green gif
function tickStart () {
  tick = window.setInterval(incrementPoints, 500);
}
function incrementPoints () {
  points += (1 * multiplier);
  $('#points').text(points);
  if (points >= 3000) {
    $('section').html('<button type="button" id="winbutton" data-toggle="modal" data-target=".bs-example-modal-lg" class="btn btn-primary btn-lg btn-block btn-danger">WIN</button>');
    winGame();
  };
  $('#gif').html('<img class="resize" src="assets/images/mario-coins.gif">');                            //ADD IN #GREEN VIA DOM MANIP
}
//Stop incrementation and show tick status via #red gif
function stopTick () {
  clearInterval(tick);
  $('#gif').html('<img class="resize" src="assets/images/mario-die.gif">');
}

tickStart();

function winGame (){
$('#winbutton').click (function (){
  $('#points').remove();
  $('#gif').remove();
  $('#elapsed_time').remove();
  $('#winbutton').modal('show');
  $('#winbutton').remove();
  });
};

//EVENT LISTENERS
//Stop and restart upon mouse movement
$(window).mousemove (function(){
  stopTick();
  tickStart();
});
//Stop and restart upon click
$(window).click (function(){
  stopTick();
  tickStart();
});
//Stop and restart upon key press
$(window).keydown (function(){
  stopTick();
  tickStart();
});

});//END OF DOM CHECK


//STOPWATCH -- https://www.ostraining.com/blog/coding/stopwatch/
// initialize your variables outside the function
var count = 0;
var clearTime;
var seconds = 0, minutes = 0, hours = 0;
var clearState;
var secs, mins, gethours ;
function startWatch( ) {
  /* check if seconds is equal to 60 and add a +1 to minutes, and set seconds to 0 */
  if ( seconds === 60 ) {
    seconds = 0; minutes = minutes + 1;
  }
  /* you use the javascript tenary operator to format how the minutes should look and add 0 to minutes if less than 10 */
  mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' );
  /* check if minutes is equal to 60 and add a +1 to hours set minutes to 0 */
  if ( minutes === 60 ) { minutes = 0; hours = hours + 1; }
  /* you use the javascript tenary operator to format how the hours should look and add 0 to hours if less than 10 */
  gethours = ( hours < 10 ) ? ( '0' + hours + ': ' ) : ( hours + ': ' ); secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds );
  // display the stopwatch
  $("#elapsed_time").text(gethours + mins + secs);
  /* call the seconds counter after displaying the stop watch and increment seconds by +1 to keep it counting */
  seconds++;
  /* call the setTimeout( ) to keep the stop watch alive ! */
  clearTime = setTimeout( "startWatch( )", 1000 );
}
  //create a function to start the stop watch

  startWatch( )


// // function startTime( ) {
//   /* check if seconds, minutes, and hours are equal to zero and start the stop watch */
//  if ( seconds === 0 && minutes === 0 && hours === 0 ) {
//    /* hide the fulltime when the stop watch is running */
//    var fulltime = document.getElementById( "fulltime" ); fulltime.style.display = "none";
//    /* hide the start button if the stop watch is running */
//    this.style.display = "none";
//    /* call the startWatch( ) function to execute the stop watch whenever the startTime( ) is triggered */
//    startWatch( ); }
//    if () } //
//    startTime()
//    /* you need to bind the startTime( ) function to any event type to keep the stop watch alive ! */
//    window.addEventListener( 'load', function ( ) { var start = document .getElementById("start"); start.addEventListener( 'click', startTime ); });
//    startwatch.js end
//
// var lowCost = multiplier >= 3 ? 60 : 30;
// var medCost = multiplier >= 3 ? 200 : 100;
// var hiCost = multiplier >= 3 ? 360  : 180;
