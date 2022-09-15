(function($, Drupal) {
  'use strict';

  Drupal.behaviors.slider = {
    attach: function(context) {
      $('.slider__container', context)
        .once('slider')
        .each(function() {
          var $slick_carousel = $('.slider');

          $($slick_carousel).slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true,
            centerPadding: '25%',
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: false,
                  centerPadding: '0',
                  dots: false,
                  dotsClass: 'slick-dots',
                  appendDots: $('.slick-dots-wrapper'),
                  customPaging: function(slick, index) {
                    return '<a class="slick-dots__link">' + index + '</a>';
                  },
                  slidesToShow: 1,
                },
              },
            ],
          });
        });
    },
  };
})(jQuery, Drupal);
