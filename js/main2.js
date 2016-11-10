// JavaScript Document

$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {		

  			$( "nav" ).animate({    
    			left: "0"    
  				}, 500, function() {
  					var width = $(window).width();
  					var cal = width*0.8;
    				$('nav').css("position","initial");
    				$('nav').css("width",cal+"px");
  			});

			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%',				
			});
			$('nav').css("position","fixed");
		}
	});
 
	// Mostramos y ocultamos submenus
	/*$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});*/
}