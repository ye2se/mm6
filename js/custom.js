

$(function () {
    const mainVisualSlide = new Swiper('.main_visual_slide', {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".main_visual_slide .swiper-pagination",
            clickable: true
        },

    })
})

$(function () {
    const mainSetSlide = new Swiper('.main_set_slide', {
        //slidesPerView: "4",
        slidesPerView: "1",
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_set .arrows .next',
            prevEl: '.main_set .arrows .prev',
        },

        breakpoints: {
            320: {
                slidesPerView: "1",
                spaceBetween: 30,
            },
            480: {
                slidesPerView: "2",
                spaceBetween: 30,
            },
            500: {
                slidesPerView: "2",
                spaceBetween: 30,
            },
            768: {
                slidesPerView: "auto",
                spaceBetween: 30,
            },
        },

    })
})


$(function () {
    $('.main_hot .inner .tab_menu button').on('click', function () {
        let idx = $(this).parent().index();
        console.log(idx)
        $('.main_hot .tab_content .itm')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');
        $(this).parent().addClass('on').siblings().removeClass('on')
    })
});

$(function () {
    const mainHotslide = new Swiper('.tab_slide', {
        slidesPerView: "3",
        spaceBetween: 30,
    })
})

$(function () {
    const mainInstaSlide = new Swiper('.main_insta_slide', {
        slidesPerView: "6",
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: ".bar",
            hide: false,
            draggable: true,
            dragSize: 100,
            loop: true,
        },
    })
})

$(window).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.to_top').fadeIn(500);
        } else {
            $('.to_top').fadeOut(500);
        }
    });

    $(".to_top").click(function () {
        $('html, body').animate({ scrollTop: 0 }, '1000');
    });

});

$(function () {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
});

$(function () {
    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    })

    $('#header .gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().slideToggle();
        }
    })

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('#header .gnb>ul>li ul').removeAttr('style')
    })
})
