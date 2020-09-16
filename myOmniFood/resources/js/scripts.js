
$(document).ready(function() {

      $('.js--section-feature').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass();
        }
    })
});

 /* Just A Test */
    /*
    $('h1').click(function() {
        $(this).css('background-color', '#ff0000')
    });
    */

    /* mod this
    var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
    }, {
    offset: '25%'
    })
    */
/*
    $('js--section-feature').waypoint(function(direction) {
        if (direction == down) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    })
*/