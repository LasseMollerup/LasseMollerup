$(document).ready(function(){

    $('.carousel').carousel({
        interval: 4000
    });
    
    
    $("#toogle-btn").on("click", function() { 
        $("#text-toggle-cb").toggle(1000, function() {
            alert("toggled");
        });
    });
    $("#toogle-btn-ad").on("click", function() { 
        $("#text-toggle-ad").toggle(1000, function() {
            alert("toggled");
        });
    });
});

