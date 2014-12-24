// Navbar scrolling using JQuery animations

$(document).ready(function(){

    $('#pennhack-menu').click(function(){
        
        $('html, body').animate({
            scrollTop: $("#pennhack-section").offset().top
        }, 500);
        
    }); 
    $('#learning-menu').click(function(){
        
        $('html, body').animate({
            scrollTop: $("#learning-section").offset().top
        }, 500);
        
    });
    
});
