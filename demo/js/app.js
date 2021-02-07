$(function () {
    ///index-1-nav-start///
    $(function () {
        if ($(".index-1")[0]) {
            var $dis = $(".index-1").offset().top;
            $(window).scroll(function () {
                var $scroll = $(this).scrollTop();
                if ($scroll >= $dis) {
                    $(".index-1").addClass("fixed-1")
                } else {
                    $(".index-1").removeClass("fixed-1")
                }

            })
        }
    });
    /////index-1-nav-end/////
///scrole ismot start///
    $(document).ready(function () {

        $("a").on('click', function (event) {

            if (this.hash !== "") {

                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1500, function () {
                    window.location.hash = hash;
                });
            } // End if
        });
    });
///scrole ismot end///
    ///index-2-nav-start///
    $(function () {
        if ($(".index-2")[0]) {
            var $dis = $(".index-2").offset().top;
            $(window).scroll(function () {
                var $scroll = $(this).scrollTop();
                if ($scroll >= $dis) {
                    $(".index-2").addClass("fixed-2")
                } else {
                    $(".index-2").removeClass("fixed-2")
                }

            })
        }
    });
    /////index-2-nav-end/////
      ///index-3-nav-start///
    $(function () {
        if ($(".index-3")[0]) {
            var $dis = $(".index-3").offset().top;
            $(window).scroll(function () {
                var $scroll = $(this).scrollTop();
                if ($scroll >= $dis) {
                    $(".index-3").addClass("fixed-3")
                } else {
                    $(".index-3").removeClass("fixed-3")
                }

            })
        }
    });
    /////index-3-nav-end/////
    
       ///index-3-nav-start///
    $(function () {
        if ($(".index-4")[0]) {
            var $dis = $(".index-4").offset().top;
            $(window).scroll(function () {
                var $scroll = $(this).scrollTop();
                if ($scroll >= $dis) {
                    $(".index-4").addClass("fixed-4")
                } else {
                    $(".index-4").removeClass("fixed-4")
                }

            })
        }
    });
    /////index-3-nav-end/////

    /////////////
    $('.offers-slide').slick({
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<i class="fa fa-long-arrow-alt-right right-arrow"></i>',
        prevArrow: '<i class="fa fa-long-arrow-alt-left left-arrow"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    /////////////////

    /////////////index-1 -client-slider//////////////
    $('.client-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1300,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }

        ]
    });
    /////////////index-1 -client-slider//////////////

    ///index-2 testimonial slide start////

    $('.testimonial-slider').slick({
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<i class="fa fa-long-arrow-alt-right right-arrow"></i>',
        prevArrow: '<i class="fa fa-long-arrow-alt-left left-arrow"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    ///index-2 testimonial slide end////


    ///index-3 testimonial slide start////

    $('.testimonial_slider').slick({
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<i class="fa fa-long-arrow-alt-right right-arrow-index-3"></i>',
        prevArrow: '<i class="fa fa-long-arrow-alt-left left-arrow-index-3"></i>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    arrows: false
                }
            }
        ]
    });
    ///index-3 testimonial slide end////

    ////back_to_top index////

    $(function () {
        $(window).scroll(function () {

            var $scroll = $(this).scrollTop();

            if ($scroll >= 400) {
                $(".top-index").fadeIn();
            } else {
                $(".top-index").fadeOut();
            }
        })

        $(".top-index").click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 3000)
        })
    })

    ////back_to_top index////

    ////back_to_top index2////

    $(function () {
        $(window).scroll(function () {

            var $scroll = $(this).scrollTop();

            if ($scroll >= 400) {
                $(".top-index2").fadeIn();
            } else {
                $(".top-index2").fadeOut();
            }
        })

        $(".top-index2").click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 3000)
        })
    })

    ////back_to_top index2////

    ////back_to_top index3////

    $(function () {
        $(window).scroll(function () {

            var $scroll = $(this).scrollTop();

            if ($scroll >= 400) {
                $(".top-index3").fadeIn();
            } else {
                $(".top-index3").fadeOut();
            }
        })

        $(".top-index3").click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 3000)
        })
    })

    ////back_to_top index3////


    ////back_to_top index4////

    $(function () {
        $(window).scroll(function () {

            var $scroll = $(this).scrollTop();

            if ($scroll >= 400) {
                $(".top-index4").fadeIn();
            } else {
                $(".top-index4").fadeOut();
            }
        })

        $(".top-index4").click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 3000)
        })
    })

    ////back_to_top index4////

    /////////////index-4 -team-slider//////////////
    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        speed: 1300,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    /////////////index-4 -experienc-slider//////////////
    $('.experienc-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        speed: 1300,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
    /////////////index-4 -experienc-slider//////////////
    ///js-end///

});
