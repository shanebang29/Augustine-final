$(document).ready(function(){
    $('.dropdown-menu').hover(function(){
        $('.rounded-full').toggleClass('small');
    });
    $('.dropdown-menu').click(function(){
        $('.dropdown-inner').toggleClass('visible-1');
        $('.dropdown-menu .close-menu').toggleClass('visible');
        $('.dropdown-menu .open-menu').toggleClass('invisible');
        $('.rounded-full').toggleClass('ml-1');
        $('.dropdown-menu .fal').toggleClass('visible');
    });
});
// ==========slick js config============
$(function(){
    $('.slide').slick({
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        autoplayspeed: 500,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: false,
                
            }
        }]
      });
});
$(function(){
    $('.offer-slide').slick({
        cssEase: 'linear',
        autoplay: true,
        autoplayspeed: 500,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 1278,
              settings: {
                slidesToShow: 3
              }
            }
          ]
    });
});
// =========SCROLL TOP BUTTON===========
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('.scroll-top').fadeIn();
        } else{
            $('.scroll-top').fadeOut();
        }
    });
    $('.scroll-top').click(function(){
        $('html ,body').animate({scrollTop: 0}, 800);
    });
});