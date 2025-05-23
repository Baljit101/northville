/* ---------------------------------------------

Javascript

--------------------------------------------- */

(function($) {
    "use strict";

    //Menu//
    $( ".menu-toggle" ).click(function() {
        $("body").toggleClass("menu_open");
    });

    // click overlay to close menu
    $( ".menu_open_overlay" ).click(function() {
        $("body").removeClass("menu_open");
    });

    // click overlay to close menu
    $( ".menu_open_overlay" ).click(function() {
        $("menu-item").removeClass("active");
    });
    // Quando a classe menu toggle for clicada
    $('.menu-toggle').click(function(){
         // Adicione ao nav a classe .active
        $('.menu-container').toggleClass('active')
        })
        // Quando for clicado em algum li de uma ul
        $('ul.menu li').click(function(){
        /*  Pegue este elemento que foi clicado
            E remova de seus irmãos a classe active */
        $(this).siblings().removeClass('active');
        // Adicione ao elemento clicado a classe active
        $(this).toggleClass('active');
    })
    
    //scroll indicator
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }

    //Main Carousel


    $('.carousel-2-1').owlCarousel({
        loop:true,
        thumbs:false,
        pagination : true,
        nav: false,
        margin: 30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            991:{
                items:2
            }
        }
    })

    $('.carousel-1').owlCarousel({
        loop:true,
        thumbs:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                pagination : true
            }
        }
    })

    $('.carousel-3-2-1').owlCarousel({
        loop:true,
        thumbs:false,
        pagination : false,
        nav: true,
        stagePadding: 15,
        margin: 16,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav: true
            },
            767:{
                items:2,
                nav: true
            },
            991:{
                items:3,
                nav: true
            }
        }
    })

    $('.carousel-4-3-2').owlCarousel({
        loop:true,
        thumbs:false,
        pagination : false,
        nav: true,
        stagePadding: 0,
        margin: 0,
        responsiveClass:true,
        responsive:{
            767:{
                items:2
            },
            991:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })

    $('.carousel-5-4-3').owlCarousel({
        loop:true,
        thumbs:false,
        pagination : false,
        stagePadding: 0,
        margin: 0,
        autoplay:true,
        loop:true,
        responsiveClass:true,
        responsive:{
            767:{
                items:3
            },
            991:{
                items:4
            },
            1200:{
                items:5
            }
        }
    })

    $('.wide-gallery').owlCarousel({
        loop:true,
        thumbs:false,

        pagination : false,
        nav: true,
        stagePadding: 15,
        margin: 16,
        responsiveClass:true,
        responsive:{
            600:{
                items:4
            }
        }
    })

    //gallery
    $('.gallery').owlCarousel({
        loop:true,
        // Enable thumbnails
        thumbs: true,

        // Autpplay
        autoplay:true,

        autoplayTimeout: 3000,
      
        // When only using images in your slide (like the demo) use this option to dynamicly create thumbnails without using the attribute data-thumb.
        thumbImage: true,

        // Enable this if you have pre-rendered thumbnails in your html instead of letting this plugin generate them. This is recommended as it will prevent FOUC
        thumbsPrerendered: true,
        
        // Class that will be used on the thumbnail container
        thumbContainerClass: 'owl-thumbs',
        
        // Class that will be used on the thumbnail item's
        thumbItemClass: 'owl-thumb-item',
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                pagination : false
            }
        }
    });
    /////////////////////////////////////////////////////////////End

    //Adds a .scrolled class after user scrolls
    $(window).on("scroll touchmove", function() {
      $('body').toggleClass('scrolled', $(document).scrollTop() > 0 );
    });
    /////////////////////////////////////////////////////////////End

    //Adds a .scrolled-far class after user scrolls far (removes header content to speed scroll)
    $(window).on("scroll touchmove", function() {
      $('body').toggleClass('scrolled-far', $(document).scrollTop() > 500);
    });
    /////////////////////////////////////////////////////////////End

    //Toggle
    var allToggles = $(".toggle > dd").hide();
    $(".toggle > dt > a").click(function() {
        if ($(this).hasClass("active")) {
            $(this).parent().next().slideUp("easeOutExpo");
            $(this).removeClass("active");
        } else {
            var current = $(this).parent().next("dd");
            $(this).addClass("active");
            $(this).parent().next().slideDown("easeOutExpo");
        }
        return false;
    });
    /////////////////////////////////////////////////////////////End
    
    //Accordion
    var allPanels = $(".accordion > dd").hide();
    allPanels.first().slideDown("linear");
    $(".accordion > dt > a").first().addClass("active");
    $(".accordion > dt > a").click(function() {
        var current = $(this).parent().next("dd");
        $(".accordion > dt > a").removeClass("active");
        $(this).addClass("active");
        allPanels.not(current).slideUp("easeInExpo");
        $(this).parent().next().slideDown("linear");
        return false;
    });
    /////////////////////////////////////////////////////////////End

    // wow animations
    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       100,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
      }
    );
    wow.init();
    /////////////////////////////////////////////////////////////End

    //Paroller
    $('.paroller').paroller() 

    // Smoothscrolling anchor links
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
        callback: function ( anchor, toggle ) {} // Function to run after scrolling
    });

})(jQuery);