(function($, Drupal) {
  Drupal.behaviors.tableWrapper = {
    attach: function(context, settings) {
      $('.main-content__container table')
        .once('table', context)
        .wrap('<div class="table-wrapper"></div>');
    },
  };
})(jQuery, Drupal);
