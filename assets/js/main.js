jQuery(document).ready(function ($) {
    // Home background carousel
    $('.home-slider').owlCarousel({
        animateOut: 'slideOutUp',
        items: 1,
        loop: true,
        center:true,
        autoplayHoverPause: false,
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                nav: false,
            },
            992: {
                nav: true,
            }
        },
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
    });

    // quote carousel
    $(".quote-carousel") .owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            1000: {
                items: 2,
            }
        }
    });

    $(".blog-carousel") .owlCarousel({
        animateOut: 'fadeOut',
        autoplay: true,
        dots: false,
        margin: 30,
        loop: true,
        smartSpeed: 1300,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 3,
                nav: true,
            }
        }
    });

    // Initiate the wowjs animation library
    new WOW().init();

});