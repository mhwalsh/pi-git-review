console.log( 'test' );
// I can't make compressed zip files...
var allTheSugar = 0;

var addSugar = function( amount ){
  console.log( 'in addSugar:', amount );
  allTheSugar += amount;
  console.log( 'sugar:', allTheSugar );
  displaySugar();
}; // end addSugar

var displaySugar = function(){
  console.log( 'in displaySugar');
  var outputLabel = document.getElementById( 'sugarOut' ).innerHTML = allTheSugar;
}; // end displaySugar
