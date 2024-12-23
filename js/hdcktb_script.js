$(document).ready(function(){

    // handle links with @href started with '#' only
    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');

        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }

        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();

        // top position relative to the document
        var pos = $id.offset().top;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });


    // hamburger button
    $(".burger a").click(function(){
      $("body").toggleClass("open");

      return false;
    });

    // navigation button
    $("nav").click(function(){
      $("body").removeClass("open");

    });


    // Close menu by pressing the ESC key.
    $(document).keyup(function (e) {
      if ($('body').hasClass('open') && e.keyCode === 27) { // ESC
        $('body').removeClass('open');
      }
    });


  $(window).scroll(function(){

      // #gnb hide and show
      if ($(window).scrollTop() >= 200) {
        $("#wrapper").addClass("slide");
        $(".top_btn").addClass("add_top");
        $(".move_div").addClass("showup");
      } else {
        $("#wrapper").removeClass("slide");
        $(".top_btn").removeClass("add_top");
        $(".move_div").removeClass("showup");

      }

  });



});


$(window).on("load", function() {

    // lazy loading for background images
    $(".lazy_img").removeClass("lazy_css");


});
