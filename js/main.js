$(window).on('load', function () {
    $('.pre-loader').delay(4250).fadeOut("500", function () {
        $(this).remove();
    });
    $(".mo-modal-overlay").fadeIn(500)
    $(".mo-modal").addClass("mo-modal-in");
});
$(document).ready(function () {
    new WOW().init();
    $('.mo-modal-overlay').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
    });
    $('.mo-modal').click(function (e) {
        e.stopPropagation();
    });
    $('.mo-modal-close').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
    });
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
    });
    /////////cats Slider/////////
    $('.cats-slider').owlCarousel({
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
                loop: true,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3
            }
        }
    });
    /////////products Slider/////////
    $('.products-slider').owlCarousel({
        margin: 26,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3
            }
        }
    });
    /////////gallery Slider/////////
    $('.gallery-slider').owlCarousel({
        margin: 23,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 2,
                loop: true,
            },
            500: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5
            }
        }
    });
    ///////////////media/////////////////////
    if ($(window).width() <= 767) {
        /////acc/////
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
        ///////////////search/////////////////////
        $('.mo-search-icon').click(function () {
            $(".search-form").fadeIn(400);
            $("body").addClass("overflow");
        });
        $('.search-form').click(function () {
            $(".search-form").fadeOut(400);
            $("body").removeClass("overflow");
        });
        $('.search-cont').click(function (e) {
            e.stopPropagation();
        });
        ///////////////menu/////////////////////
        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(300);
            $(".mo-navbar").addClass("nav-in");
            $('.lang').addClass("lang-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $('.lang').removeClass("lang-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.mo-menu-close').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $('.lang').removeClass("lang-in");
            $("body").removeClass("overflow");
        });
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings('.nav-foot').css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings('.nav-foot').css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
    })
});