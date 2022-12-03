
(function($){

    $(document).ready(
    
      function(){
    
        // Comprobar si estamos, al menos, 100 px por debajo de la posición top
        // para mostrar o esconder el botón
        $(window).scroll(function(){
    
          if ( $(this).scrollTop() > 90 ) {
    
            $('.scroll-top-btn').fadeIn();
    
          } else {
    
            $('.scroll-top-btn').fadeOut();
    
          }
    
        });
    
        // al hacer click, animar el scroll hacia arriba
        $('.scroll-top-btn').click( function( e ) {
    
          e.preventDefault();
          $('html, body').animate( {scrollTop : 0}, 800 );
    
        });



    
      });

      $(document).scroll(function(){
        const Y = $("html").scrollTop();
        
        Y > 30 ? $("nav").addClass("navblack").fadeIn() : $("nav").removeClass("navblack")
        
            })

            function alertar(texto) {
              alert(texto);
           }

    
     
    })(jQuery);

    
   




const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))