$(document).ready(function(){
//all jquery methods go here

$("#h1").hover(up,down);
function up(){
    $(this).css('color', 'red');
   }

  function down(){
  	$(this).css('color', 'blue')



  }



});

