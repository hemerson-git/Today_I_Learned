$(document).ready(() => {
  $('span').hide();
  
  $('#to_blue').click(() => {
    $('p').css('color', '#6d9ACC');
    showMessage('#6d9ACC');
  });

  $('#to_red').click(() => {
    $('p').css('color', '#dd6552');
    showMessage('#dd6552');
  });

  function showMessage(clr = 'black') {
    $('span').show().delay(2000).fadeOut('slow');

    //Multiple declaration using a object
    $('span').css({color: clr, border: `1px solid ${clr}`, padding: '3px 10px'});
  }
})
