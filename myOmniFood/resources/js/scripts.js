
$(document).ready(function() {

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
});