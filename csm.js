$(document).ready(function() {
  $('#menu-toggle').on('click', function() {
    $('.ico').toggleClass('ico-menu').toggleClass('ico-close');
    $('.swatch-container').toggleClass('hide').toggleClass('show');
    $('#menu-toggle, .line').toggleClass('close');
  });
});

