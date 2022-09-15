(function($, Drupal) {
  Drupal.behaviors.navColorChange = {
    attach: function(context, settings) {
      if (document.getElementsByClassName('hero')[0]) {
        var navigation = document.getElementsByClassName('js-header')[0];
        var heroElement = document.getElementsByClassName('hero')[0];
        navigation.classList.add('header--has-js-bg');

        window.addEventListener('scroll', function() {
          if ( window.scrollY >= 50 && window.scrollY + 50 <= heroElement.offsetTop + heroElement.offsetHeight ) {
            navigation.classList.add('header--bg');
            navigation.classList.remove('header--bg--darker');
          } else if ( window.scrollY + 50 > heroElement.offsetTop + heroElement.offsetHeight) {
            navigation.classList.add('header--bg--darker');
          } else {
            navigation.classList.remove('header--bg', 'header--bg--darker');
          }
        });
      }
    }
  };
})(jQuery, Drupal);
