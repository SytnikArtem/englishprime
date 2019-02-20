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

    //Элементы курсов (главная)
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
    //Кнопка читать больше (отзывы на интевсивных курсах)

    $('.course-reviews-more').click(function (e) {
        e.preventDefault();
        var thisHeight = $(this).parent().find('.course-reviews-text').height();
        $(this).parent().find('.course-reviews-overflow').toggleClass('active');
        if($(this).parent().find('.course-reviews-overflow').hasClass('active')) {
            $(this).parent().find('.course-reviews-overflow').height(thisHeight);
            $(this).text('Скрыть');
        }
        else {
            $(this).parent().find('.course-reviews-overflow').height(120);
            $(this).text('Читать больше');
        }
    });

    //Анимации
    function gsapTop() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapTop').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var position = $(this).height();
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
            var position = $(this).data("height") || $(this).height();
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
    function gsapSlideGo() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapSlideGo').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var tween = TweenMax.fromTo(this, animationDuration,
                {scale: 0.8, opacity: 0},
                {scale: 1, opacity: 1, ease: Power4.ease, delay: animationDelay, force3D:true}
            );
            var trigg = this.parentNode;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapSlideGallery() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapSlideGallery').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var position = $(this).width();

            var tween = TweenMax.fromTo(this, animationDuration,
                {x: 0},
                {x: "-100%", ease: Power4.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this.parentNode;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    function gsapSlideGraf() {
        var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

        $('.gsapSlideGraf').each(function() {
            var animationDelay = $(this).data("delay") || 1;
            var animationDuration = $(this).data("duration") || 0.5;
            var position = $(this).width();

            var tween = TweenMax.fromTo(this, animationDuration,
                {x: 0},
                {x: "100%", ease: Power0.easeOut, delay: animationDelay, force3D:true}
            );
            var trigg = this.parentNode;
            new ScrollMagic.Scene({triggerElement: trigg})
                .setTween(tween)
                .addTo(controller);
        })
    }
    if ($(window).width() > 1023) {
        gsapTop();
        gsapWidth();
        gsapHeight();
        gsapFade();
        gsapSlideInLeft();
        gsapFadeTop();
        gsapFadeInLeft();
        gsapUp();
        gsapSlideGo();
        gsapSlideGallery();
        gsapSlideGraf();
    }

    //Парадакс для флага
    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
    new ScrollMagic.Scene({triggerElement: "#parallax1"})
        .setTween('.third-block-overlay', {y: "0", ease: Linear.easeNone})
        .addTo(controller);
    
    //Ховер для фона (страница advanced)
    
    $('.advanced-btn').hover(function () {
        $(this).closest('.advanced-item').find('.advanced-item-overlay').addClass('active');
    },function(){
        $(this).closest('.advanced-item').find('.advanced-item-overlay').removeClass('active');
    });

    //Логика графика (основная програма)
    setTimeout(function () {
        var currentHeight = $('.program-change.active').outerHeight();
        $('.program-content').height(currentHeight);
    });

    var circleArr1 = ['10', '20', '30', '40', '50', '60', '70', '80', '90'];
    var circleArr2 = ['5', '10', '15', '20', '25', '30', '35', '40', '45'];
    var circleArr3 = ['5', '10', '15', '20', '25', '30', '35', '40', '45'];

    $('.program-graf_main .program-graf-item').click(function(){
        var currentIndex = $(this).index();
        $(this).prevAll('.program-graf-item').addClass("accent").removeClass('active');
        $(this).nextAll('.program-graf-item').removeClass("accent").removeClass('active');
        $(this).addClass('active').removeClass('accent');
        $('.program-change').eq(currentIndex).addClass('active').siblings().removeClass('active');
        var currentHeight = $('.program-change.active').height();
        $('.program-content').height(currentHeight);
        var firstCircle = circleArr1[currentIndex] + ', 100';
        var secondCircle = circleArr2[currentIndex] + ', 100';
        var thirdCircle = circleArr3[currentIndex] + ', 100';
        $('.first-circle').css('stroke-dasharray', firstCircle);
        $('.second-circle').css('stroke-dasharray', secondCircle);
        $('.third-circle').css('stroke-dasharray', thirdCircle);
        $('.first-number').text(circleArr1[currentIndex]);
        $('.second-number').text(circleArr2[currentIndex]);
        $('.third-number').text(circleArr3[currentIndex]);
    });

    //Галерея
    var grid = $('.gallery-content').masonry({
        gutter: 0,
        isInitLayout: true,
        itemSelector: '.gallery-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
    grid.imagesLoaded().progress( function() {
        grid.masonry();
    });
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            // "zoom",
            //"share",
            // "slideShow",
            //"fullScreen",
            //"download",
            // "thumbs",
            "close"],
        infobar: false
    });

    //Табы (вакансии)

    $('.jobs-tab-btn').click(function () {
       $(this).toggleClass('active').parent().siblings().find('.jobs-tab-btn').removeClass('active');
       $(this).parent().find('.jobs-tab-drop').slideToggle().parent().siblings().find('.jobs-tab-drop').slideUp();
    });

    $('.reviews-filter-link').click(function(e){
       e.preventDefault();
       $(this).addClass('active').siblings().removeClass('active');
    });


    //Читать больше (страница reviews)

    $('.reviews-more').click(function(e){
        e.preventDefault();
        var reviewsHeight = $(this).parent().find('.reviews-text').height();

        $(this).parent().find('.reviews-block').toggleClass('active');
        if($(this).parent().find('.reviews-block').hasClass('active')) {
            $(this).parent().find('.reviews-block').height(reviewsHeight);
            $(this).text('Скрыть');
        }
        else {
            $(this).parent().find('.reviews-block').height(120);
            $(this).text('Читать больше');
        }
    });

    //Новости

    $('.news-content').masonry({
        // options
        itemSelector: '.news-item',
        percentPosition: true,
        gutter: 40,
        horizontalOrder: true
    });

    //Логика формы

    $('.second-link').click(function(e){
        e.preventDefault();
        $('.second-form_first').hide();
        $('.second-form_second').show();
        $(this).hide();
    });

    $('.second-form-back').click(function(e){
        e.preventDefault();
        $('.second-form_first').show();
        $('.second-form_second').hide();
        $('.second-link').show();
    });

    //Логика второго графика

    function programGrafic() {
        var items = $('.program-graf_second').find('.program-graf-item');
        if(items.length > 0) {
            var firstIndex = 1;
            var secondIndex = 5;
            items.eq(firstIndex).addClass('accent').nextAll('.program-graf-item').addClass('accent');
            items.eq(secondIndex).removeClass('accent').addClass('active').nextAll('.program-graf-item').removeClass('accent');
            var grafPosition1 = items.eq(firstIndex).position().left + 20;
            var grafPosition2 = items.eq(secondIndex).position().left + 20;
            var grafWidth = grafPosition2 - grafPosition1;
            $('.program-graf-bg_second').css({'width': grafWidth, 'margin-left': grafPosition1, 'background-position-x': - grafPosition1});
            $('.route-item').eq(secondIndex).addClass('active').nextAll('.route-item').hide();
            $('.route-item').eq(firstIndex).addClass('nomarg').prevAll('.route-item').hide();
        }
    }
    programGrafic();

    //Логика таблицы на мобильном
    if ($(window).width() < 1024) {
        $('.table-column-title').click(function(){
            $(this).toggleClass('active');
            $(this).parent().find('.table-column-drop').slideToggle();
        });

        $('.table-column-date:empty').parent().hide();

        $('.table-select').click(function(){
           $(this).find('.table-list').toggleClass('active');
           $(this).toggleClass('active');
        });
        // $('.table-item').click(function(){
        //    $(this).addClass('top-item').siblings().removeClass('top-item');
        // });
    }

    //Мобильное меню

    $('.header-btn').click(function(){
       $(this).toggleClass('active');
       $('.mobile-menu').toggleClass('active');
       $('.header').toggleClass('active');

        if($(this).hasClass('active')) {
            bodyFreezeScroll();
        }
        else {
            bodyUnfreezeScroll();
        }
    });

    //удаление скрола

    var $body = $(window.document.body);
    function bodyFreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('overflow', 'hidden');
        $body.css('marginRight', ($body.css('marginRight') ? '+=' : '') + ($body.innerWidth() - bodyWidth));
        $body.css('position', 'fixed');
    }

    function bodyUnfreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('marginRight', '0');
        $body.css('overflow', 'auto');
        $body.css('position', 'relative');
    }
    if(navigator.userAgent.match(/iPhone/)) {
        $('.mobile-menu-content').addClass('iphone');
    }

    //Контакты на мобильном

    $('.contacts-item-next').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).parent().parent().addClass('active').siblings().addClass('hide');
            $('body').addClass('new-page');
        }
        else {
            $('body').removeClass('new-page');
            $(this).parent().parent().removeClass('active').siblings().removeClass('hide');
        }
    });
    $('body').swipe({
        swipeLeft:function(event, direction) {
            $('body').removeClass('new-page');
            $('.contacts-item').removeClass('active').removeClass('hide');
        }
    });
});
