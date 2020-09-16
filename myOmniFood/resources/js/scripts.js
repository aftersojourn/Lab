
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

    // Hero Text //
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000)

    })

    /* Sample
    $("button").click(function() {
        $('html,body').animate({
            scrollTop: $(".second").offset().top},
            'slow');
    });
    */

});