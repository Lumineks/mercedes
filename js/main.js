$(function () {
    let burger = $('.header__burger');
    let menu = $('.header__menu');
    let phone = $('.header__link--phone');

    burger.click(function () {
        burger.toggleClass('active');
        menu.toggleClass('active');
        phone.toggleClass('active');
        $('body, html').toggleClass('lock');
    });
    $('.header__item .header__link').click(function () {
        burger.toggleClass('active');
        menu.toggleClass('active');
        phone.toggleClass('active');
        $('body, html').toggleClass('lock');
    });
    $('.design__video').fancybox({
        afterShow: function () {
            $('body, html, .header').toggleClass('lock')
            console.log('log');
        },
        afterClose: function () {
            $('body, html, .header').toggleClass('lock')
            console.log('log');
        }
    });

    let comfortSlider = $('.comfort__slider');
    comfortSlider.owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: true,

        responsive: {
            0: {
                items: 1
            },
            630: {
                items: 2
            }
        }
    });

    let characteristicsSlider = $('.characteristics-add__slider');
    characteristicsSlider.owlCarousel({
        items: 1,
        dots: true,
        nav: true,
    });

    let securitySlider = $('.security__slider');
    securitySlider.owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
    });

    $('.characteristics-add__view').click(function () {
        characteristicsSlider.trigger('to.owl.carousel', [$(this).data('slide')]);
    });

    $('.security__circle').click(function () {
        let item = '#item' + $(this).data('item');
        console.log($(item));
        if ($(item).hasClass('active'))
            return;

        $('.security__circle').removeClass('active');
        $(this).toggleClass('active');
        $('.security__description').removeClass('active');
        $(item).toggleClass('active');
    });

    $('.security__btn').click(function () {
        $('.security__circle').removeClass('active');
        $('.security__description').removeClass('active');
    });


    $('.page-section').addClass('section');
    $('.main').attr('id', 'fullpage');

    let page = $('#fullpage');
    page.fullpage({
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', ],
        scrollingSpeed: 1200,
        responsiveWidth: 990,
    });
    $('.scroll').click(function () {
        page.fullpage.moveSectionDown();
    });


    function isMobile() {
        return window.innerWidth >= 1023 ? false : true;
    }

    function mobileBg() {
        if (isMobile()) {
            let header = $('.header');
            if (pageYOffset >= 800)
                header.addClass('bg');
            else {
                header.removeClass('bg');
            }
        }
    }

    $(document).scroll(function () {
        mobileBg(); 
        // console.log('log');
    });
});