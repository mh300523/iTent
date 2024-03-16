$(document).ready(function () {
 
    
    $(window).on('load', function () {
        //preloader
      $('.pre-loader').fadeOut("500", function () {
        $('body').removeClass("overflow");
        $(this).remove();
      });

      if ($('.pre-loader').length == 0) {
        $('body').removeClass("overflow");
      }
    });
  
    ///////// **mobile size** /////////
    
    $('#navbtn').click(function(){
		$('.main_nav').addClass('over_mob');
		$('.over_click').addClass('on');
		$('body').addClass('scroll_mob');
	});

	$('.closebtn').click(function(){
		$('.main_nav').removeClass('over_mob');
		$('.over_click').removeClass('on');
		$('body').removeClass('scroll_mob');
	});
    
    $('.over_click').click(function(){
		$('.closebtn').trigger('click');
	});
    
    if (window.innerWidth <= 767) {
      $('.main_nav .dir_anc').hover(function() {
            $(this).parent().find('.sam_menu').slideToggle(300);
            $(this).parent().siblings().removeClass('open').children('.sam_menu').slideUp(300);
        });
    } 
    
    ///////// **main Slider** /////////
    var mainswiper = new Swiper('.main_slider .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
    delay: 2000,
    },
    speed: 500,
    updateOnWindowResize: true,
  });
    
    ///////// **reviews Slider** /////////
     var reviews = new Swiper('.reviews_slider .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
       autoplay: {
          delay: 2000,
        },
         speed: 500,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.reviews_slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.reviews_slider .swiper-button-next',
            prevEl: '.reviews_slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
        },
    });
    

  });  

