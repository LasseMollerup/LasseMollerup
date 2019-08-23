$(document).ready(function(){

    // Making the fontAwesome hamburger change to X and back when clicked.
    $(".fa-bars").on('click', function() {
        $("#icon").toggleClass("fa-bars fa-times");
    });

    // Setting the speed of the slides in the Carousel
    $('.carousel').carousel({
        interval: 4000
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

