$(document).ready(() => {
  $('#to_left').click(() => {
    $('h1').addClass('text-left');
    $('h1').removeClass('text-right text-center');
  });

  $('#to_right').click(() => {
    $('h1').addClass('text-right');
    $('h1').removeClass('text-left text-center');
  });

  $('#to_center').click(() => {
    $('h1').addClass('text-center');
    $('h1').removeClass('text-right text-left');
  });
});
