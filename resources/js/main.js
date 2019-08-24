$(document).ready(function(){

    // Welcome alert
    alert("Hello! and welcome to my site." + " " + "Here you can get to know me and see my current coding skills." + " "
    + "In case you " + " " +
    "- Lasse Mollerup"
    );
    // Making the fontAwesome hamburger change to X and back when clicked.
    $(".fa-bars").on('click', function() {
        $("#icon").toggleClass("fa-bars fa-times");
    });

    // $(".navbar-nav li a").on('click', function() {
    //     $(".navbar-nav li a").addClass(".navbar-nav-active");
    //   });

    // Setting the speed of the slides in the Carousel
    $('.carousel').carousel({
        interval: 200000
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

