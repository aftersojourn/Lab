
$(document).ready(function() {

    // Sticky Nav //
    $('.js--section-feature').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass();
        }
    }, {
        /* 25% of the current section and can also be changed to pixel. */
        /* offset: '25%'   */
            offset: '70px'   
          })

    // Scroll to Buttons //
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1500)
    })

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({
            scrollTop: $('.js--section-feature').offset().top
        }, 1500)
    })

    // Navigation Links//

});