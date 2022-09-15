(function($, Drupal) {
  Drupal.behaviors.referenceSlider = {
    attach: function(context, settings) {
      $('.paragraph-id--69 .content-promotions__content', context).slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
      });

      $('.references-detail__similar .references-listing__content', context).slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
      });
    },
  };
})(jQuery, Drupal);
