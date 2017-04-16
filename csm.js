$(document).ready(function() {

  var colorClasses = ['red-color', 'orange-color', 'yellow-color', 'green-color', 'turquoise-color', 'blue-color', 'indigo-color', 'purple-color', 'violet-color'];
  var colors = ['red', 'orange', 'yellow', 'green', 'turquoise', 'blue', 'indigo', 'purple', 'violet'];

  $('#menu-toggle').on('click', function() {
    $('.ico').toggleClass('ico-menu').toggleClass('ico-close');
    $('.swatch-container').toggleClass('hide').toggleClass('show');
    $('#menu-toggle, .line').toggleClass('close');
  });

  $('.swatch').on('click', function() {
    var prevClassList = $('#menu-toggle').attr('class').split(/\s+/);
    var prevColor = intersect(prevClassList, colorClasses)[0];

    var currentClassList = $(this).attr('class').split(/\s+/);
    var nextColor = intersect(currentClassList, colors)[0];

    $('#menu-toggle, body').removeClass(prevColor).addClass(nextColor + '-color');
    $('#menu-toggle').click();
  });
});


function intersect(a, b) {
  var t;
  if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
  return a.filter(function (e) {
    return b.indexOf(e) > -1;
  });
}