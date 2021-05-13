// habilitación tooltips bootstrap 4.6
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  
  $("a").click(function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $('html, body').animate({
        scrollTop: $(gato).offset().top
      }, 800, function() {
        window.location.hash = gato;
      });
    }
  });
})

// Cambio de color nav al hacer scroll
$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".nav-color-scroll").css("background" , "rgb(12, 218, 218)");
	  }

	  else{
		  $(".nav-color-scroll").css("background" , "rgb(250,250,250,0)");  	
	  }
  })
})