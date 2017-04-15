$(document).ready(function() {
  $('#menu-toggle').on('click', function() {
    $('.swatch-container').toggleClass('hide').toggleClass('show');
    $('.swatch').toggleClass('not').toggleClass('okay');
  });
});

