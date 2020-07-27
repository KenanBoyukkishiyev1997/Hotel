$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();


    
});


$('.ui-state-default').click(function() {
    alert( "Handler for .click() called." );
  });