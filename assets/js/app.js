// habilitación tooltips bootstrao 4.6
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".nav-color").css("background" , "rgb(12, 218, 218)");
	  }

	  else{
		  $(".nav-color").css("background" , "rgb(250,250,250,0)");  	
	  }
  })
})