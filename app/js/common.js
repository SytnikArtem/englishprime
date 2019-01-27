// 'use strict';

$(document).ready(function () {

    //Слайдер на главной (первый экран)
    $('.first-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000
    });
    $('.first-btn_next').click(function() {
        $('.first-slider').slick('slickNext')
    });
    $('.first-btn_back').click(function() {
        $('.first-slider').slick('slickPrev')
    });

    //клик на label для input checkbox (форма на главной)

    $('.label-check').click(function() {

        $(this).parent().find('.label-text').addClass('active');
        $(this).parent().siblings().find('.label-text').removeClass('active');

    });

    //Видео
    $(".bgvideo").click(function() {
        var dataYoutube = $(this).parents('.video').attr('data-youtube');
        $(this).parents('.video').html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' + dataYoutube + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    });

    //Табы календаря
    $('.table-item').click(function(){
       $(this).addClass('active').siblings().removeClass('active');
    });

    //Элемнты курсов (главная)
    $('.fourth-list').masonry({
        // options
        itemSelector: '.fourth-item',
        percentPosition: true,
        gutter: 40,
        horizontalOrder: true
    });
    //Слайдеры для галереи (главный экран)
    $('.fourth-slider_first').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        asNavFor: '.fourth-slider_second'
    });
    $('.fourth-slider_second').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        asNavFor: '.fourth-slider_first'
    });
    $('.fourth-btn_next').click(function() {
        $('.fourth-slider_second').slick('slickPrev')
    });
    $('.fourth-btn_back').click(function() {
        $('.fourth-slider_second').slick('slickNext')
    });

    //Анимации
    function gsapTop() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapTop').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var position = $(this).height();
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {y: -position},
                {y: 0, ease: Power4.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapWidth() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapWidth').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 1;
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {width: 0},
                {width: "100%", ease: Power4.easeOut, delay: animationDelay}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapHeight() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapHeight').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {height: 0},
                {height: "100%", ease: Power4.easeOut, delay: animationDelay}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapFade() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapFade').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {opacity: 0},
                {opacity: 1, ease: Power4.easeOut, delay: animationDelay}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapFadeTop() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapFadeTop').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 1;
            var position = $(this).height();
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {opacity: 0, y: position},
                {opacity: 1, y: 0, ease: Power4.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapSlideInLeft() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapSlideInLeft').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var position = $(this).width();

            var tween = TweenMax.fromTo(this, animationDuration,
                {x: -position},
                {x: 0, ease: Power4.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapFadeInLeft() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapFadeInLeft').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var position = $(this).width();

            var tween = TweenMax.fromTo(this, animationDuration,
                {x: -position, opacity: 0},
                {x: 0, opacity: 1, ease: Power4.easeOut, delay: animationDelay}, '=-1'
            );
            var trigg = this;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapUp() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onCenter"}});

        $('.gsapUp').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.1;
            var position = $(this).height() * 2;
            console.log(animationDelay);
            var tween = TweenMax.fromTo(this, animationDuration,
                {y: position},
                {y: 0, ease: Power4.ease, delay: animationDelay, force3D:true}
            );
            var trigg = this.parentNode;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    gsapTop();
    gsapWidth();
    gsapHeight();
    gsapFade();
    gsapSlideInLeft();
    gsapFadeTop();
    gsapFadeInLeft();
    gsapUp()

});
