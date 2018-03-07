

 $(document).ready(function(){

 	$(".button-collapse").sideNav();
     $('.slider').slider();

    $(".button-collapse").click(function(){
    	$('#navbarfixed').removeClass('navbar-fixed');
    });

    $('body').click(function(){
    	$('#navbarfixed').addClass('navbar-fixed');
    });

    $('.carousel.carousel-slider').carousel({fullWidth: true});
   });
     

// autoplay()   
// function autoplay() {
//     $('.carousel').carousel('next');
//     setTimeout(autoplay, 4500);
// }



    
        