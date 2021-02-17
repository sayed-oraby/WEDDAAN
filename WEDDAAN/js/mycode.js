/*global $, alert, console, jQuery, Typed*/

$(document).ready(function () {

    "use strict";
    
    var typed, scrollButton;
    
    $('body').scrollspy({ target: '#navbar-collapsible', offset: 50 });
    
   
     // animate links
    $('.navbar .nav li a').click(function () {
        $('html, body').animate({
            //scrollTop: $('#' + $(this).data('value')).offset().top
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
    });
    
    
    // height of particles
    $('#particles').height($(window).height());
    
    $(window).resize(function () { $('#particles').height($(window).height()); });
    
    
    typed = new Typed(".first", {
        strings: ["Hi ! I'm <span> El Sayed Oraby </span>"],
        typeSpeed: 50,
        showCursor: true,
        cursorChar: '',
        autoInsertCss: true,
        startDelay: 6000
    });
    
    typed = new Typed(".second", {
        strings: ["Creative Web Designer From Egypt."],
        typeSpeed: 50,
        showCursor: true,
        cursorChar: '',
        autoInsertCss: true,
        startDelay: 8000
    });
    
    
    typed = new Typed(".about .myspan #typedme2", {
        strings: ["<span> Hi ! I'm El Sayed Oraby... </span>"],
        typeSpeed: 50,
        backSpeed: 60,
        cursorChar: '',
        loop: true
    });
    
    var x = $(".myprogress-bar").offset().top - 200;
    
    console.log(x);
    
    /* Progress bar */
    $(window).on("scroll", function () {
        
        
        if ($(window).scrollTop() > x) {
            
            $('.myprogress-bar #example, .myprogress-bar #example2, .myprogress-bar #example3, .myprogress-bar #example4').pieChart({

                // bar color
                barColor: '#ff2b5b',
                // background color
                trackColor: '#CCC',
                // line width
                lineWidth: 4,
                // chart size
                size: 80,
                // the origin of coordinates is at the top
                rotate: 0,
                // custom animation
                animate: {
                    duration: 2000,
                    enabled: true
                }
            });
            
        }
        // End If
        
    });
    // End window.scroll

    -
    
    
    
    $('.carousel').carousel();

    
    $('.footer-third .img-content').directionalHover({
        // CSS class for the overlay
        overlay: "footer-overlay",
        // Linear or swing
        easing: "swing",
        speed: 400
    });
    
    
   
    
/* ************************************************ */
    
    // Scroll top
    $(".scroll-down i").click(function () {
        
        $("html, body").animate({
            scrollTop: $(".about").offset().top
        }, 1000);
        
    });
    
    $("html").niceScroll();
    
     
});

/* *********************************************************************************************************** */


$(document).ready(function () {
    
    "use strict";
    
    $('#particles').particleground({
        minSpeedX: 0.1,
        maxSpeedX: 0.7,
        minSpeedY: 0.1,
        maxSpeedY: 0.7,
        directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
        directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
        density: 10000, // How many particles will be generated: one particle every n pixels
        dotColor: 'rgba(204, 204, 204, .6)',
        lineColor: 'rgba(204, 204, 204, .6)',
        particleRadius: 7, // Dot size
        lineWidth: 1,
        curvedLines: false,
        proximity: 100, // How close two dots need to be before they join
        parallax: true,
        parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
        onInit: function () {},
        onDestroy: function () {}
    });
    
    
});



// loading 
$(window).on("load", function () {
    
    "use strict";
    
    //$(".loading-overlay h1, .loading-overlay p").css({visibility: "visible"});
    
    var typed;
    
    typed = new Typed(".loading-overlay .heading", {

        //strings: ["Said You Good Man", "You Are Welcom In My Website"],
        strings: ["You Are Welcom In My Website"],
        typeSpeed: 20,
        showCursor: true,
        cursorChar: ''
    });
    
    typed = new Typed(".loading-overlay .parag", {

        strings: ["This design by Mohammed Mabrook and It Coded by me"],
        typeSpeed: 20,
        showCursor: true,
        cursorChar: '',
        startDelay: 1000
    });
    
    
    $('.loading-overlay .sk-cube-grid').fadeOut(5000, function () {

        $(".loading-overlay .loading-overlay-content").fadeOut(1500);
        
        $(this).parent().fadeOut(3000, function () {

            // Show Scroll
            $("body").css("overflow", "auto");

            $(this).remove();
            
        });
        
            
    });
    
    
    
});


/* ********************************************************************************************* */


$(window).ready(function () {

    "use strict";

    var a = 0;
    
    $(window).scroll(function () {

        var CountTop = $('.count').offset().top - window.innerHeight;
        
        //console.log($('.count').offset().top - window.innerHeight);
        
        if (a === 0 && $(window).scrollTop() > CountTop) {
            
            $('.count').countTo({
                speed: 6000
            });
            
            a = 10;
        }

    });
    
    
});



$(document).ready(function () {
    
    "use strict";
	
    var scrollButton = $("#Scroll-top");
    
	//Check to see if the window is top if not then display button
	$(window).scroll(function () {
        
		if ($(this).scrollTop() > 100) {
            
			scrollButton.fadeIn();
            
		} else {
            
			scrollButton.fadeOut();
		}
        
	});
    
	
	//Click event to scroll to top
	scrollButton.click(function () {
		$('html, body').animate({scrollTop : 0}, 1000);
		return false;
	});
	
});
