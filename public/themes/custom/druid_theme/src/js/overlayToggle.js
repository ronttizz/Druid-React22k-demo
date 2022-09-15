(function ($, Drupal) {
  Drupal.behaviors.overlaytoggle = {
    attach: function(context, settings) {
      var overlayToggle = $('.js-overlay-toggle', context);
      var overlay = $('.js-overlay', context);
      var body = $('body', context);
      var html = $('html', context);
      var layoutContainer = $('.layout-container', context);
      var header = $('.l-header', context);

      overlayToggle.click(function (event) {
        event.preventDefault();
        overlayToggle.toggleClass('is-active overlay-toggle--is-closed overlay-toggle--is-open');
        overlay.toggleClass('is-open');
      });
    }
  }

  Drupal.behaviors.overlayStopScroll = {
    attach: function(context, settings) {
      var body = document.body;
      var overlayOpen = $('overlay-toggle--is-open');
      var overlayClosed = $('overlay-toggle--is-closed');
      body.addEventListener('click', function bodyListner(e) {
        if ($('.overlay-toggle').hasClass('overlay-toggle--is-open')) {
          body.setAttribute('data-reg-overlay', 'active');
          toggleViewportScrolling(true);
        }
        if ($('.overlay-toggle').hasClass('overlay-toggle--is-closed')) {
          body.removeAttribute("data-reg-overlay");
          toggleViewportScrolling(false);
        }
      }, false);

      var freezeVp = function(e) {
        e.preventDefault();
      };

      function toggleViewportScrolling (bool) {
        if (bool === true) {
          body.addEventListener('touchmove', freezeVp, false);
        } else {
          body.removeEventListener('touchmove', freezeVp, false);
        }
      }
    }
  }
})(jQuery, Drupal);