$(document).ready(function() {

  // primarily click handlers and toggling of classes

  var colorClasses = ['red-bg', 'orange-bg', 'yellow-bg', 'green-bg', 'turquoise-bg', 'blue-bg', 'indigo-bg', 'purple-bg', 'violet-bg'];
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

    $('#menu-toggle, body').removeClass(prevColor).addClass(nextColor + '-bg');
    $('#menu-toggle').click();
  });
});

// utility function to assist in finding current color against array of classes
function intersect(a, b) {

  var temp;
  if (b.length > a.length) {
    temp = b; 
    b = a;
    a = temp; 
  } 

  return a.filter(function(i) {
    return b.indexOf(i) > -1;
  });

}