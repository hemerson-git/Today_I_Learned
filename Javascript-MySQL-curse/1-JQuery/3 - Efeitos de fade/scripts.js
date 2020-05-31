$(document).ready(() => {
  $('#hide_text').click(() => {
    $('p').fadeOut();
  });

  $('#show_text').click(() => {
    $('p').fadeOut();
    //it's like a Vanilla "setTimeOut"
    $('p').delay(3000);

    //params 'fast', 'slow' and You can specify a numeric value in ms as 5000 
    $('p').fadeIn('slow');
    $('h1').fadeOut(5000);
  });
})
