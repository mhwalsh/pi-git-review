console.log( 'test' );
// I can't make compressed zip files...
var allTheSugar = 0;
var verbose = false;

var addSugar = function( amount ){
  if( verbose ) console.log( 'in addSugar:', amount );
  allTheSugar += amount;
  if( verbose ) console.log( 'sugar:', allTheSugar );
  displaySugar();
}; // end addSugar

var displaySugar = function(){
  if( verbose ) console.log( 'in displaySugar');
  document.getElementById( 'sugarOut' ).innerHTML = allTheSugar;
}; // end displaySugar
