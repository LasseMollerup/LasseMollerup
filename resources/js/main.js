$(document).ready(function(){

    // Welcome Pop-up box 
    // Making Bootstrap modal automatically show up once page is loaded.
    // $('#welcome-modal').modal('show');
    // To make the bottoms in the Welcome Modal close the modal
    // $('#btnHideModal').on('click', function () {
    //     $('#welcome-modal').modal('hide');
    // });

    
    // Making the fontAwesome hamburger change to X and back when clicked.
    $("#border-navbar-toggler").on('click', function() {
        $(".fa-bars").toggleClass("fa-times");
    });

    // $(".navbar-nav li a").on('click', function() {
    //     // $(".navbar-nav li a").addClass(".navbar-nav-active");
    //     $(this).addClass(".navbar-nav-active").siblings().removeClass(".navbar-nav-active");
    //   });
     $('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

    
    // Setting the speed of the slides in the Carousel
    $('.carousel').carousel({
        interval: 20000
    });
    
    
    // Showing and hiding the extra text in the testimonial section
    $("#toogle-btn").on("click", function() { 
        $("#text-toggle-cb").toggle(1000);
        $(this).text($(this).text() == 'Read less' ? 'Read more' : 'Read less');
    });
    $("#toogle-btn-ad").on("click", function() { 
        $("#text-toggle-ad").toggle(1000);
        $(this).text($(this).text() == 'Read less' ? 'Read more' : 'Read less');
    });

});

