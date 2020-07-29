$(document).ready(function() {
    const minus = $('.quantity__minus');
    const plus = $('.quantity__plus');
    const input = $('.quantity__input');

    const minus2 = $('.quantity__minus2');
    const plus2 = $('.quantity__plus2');
    const input2 = $('.quantity__input2');


    const minus3 = $('.quantity__minus3');
    const plus3 = $('.quantity__plus3');
    const input3 = $('.quantity__input3');

    const classLink= $('.class-link');

    $( function() {
        $('a.class-link').click(function() {
            $('a.class-link').removeClass('active');
            $(this).addClass('active');
        });
      } );

    minus.click(function(e) {
      e.preventDefault();
      var value = input.val();
      if (value > 0) {
        value--;
      }
      input.val(value);
    });
    
    plus.click(function(e) {
      e.preventDefault();
      var value = input.val();
       if (value < 9) {
        value++;
      }
      
      input.val(value);
    })

    minus2.click(function(e) {
        e.preventDefault();
        var value = input2.val();
        if (value > 0) {
          value--;
        }
        input2.val(value);
      });
      
      plus2.click(function(e) {
        e.preventDefault();
        var value = input2.val();
         if (value < 9) {
          value++;
        }
        
        input2.val(value);
      })


      minus3.click(function(e) {
        e.preventDefault();
        var value = input3.val();
        if (value > 0) {
          value--;
        }
        input3.val(value);
      });
      
      plus3.click(function(e) {
        e.preventDefault();
        var value = input3.val();
         if (value < 9) {
          value++;
        }
        
        input3.val(value);
      })
  });