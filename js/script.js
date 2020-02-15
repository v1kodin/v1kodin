$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left-solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right-solid.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
  });