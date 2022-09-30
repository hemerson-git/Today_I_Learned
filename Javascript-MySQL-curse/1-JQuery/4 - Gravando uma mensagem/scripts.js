$(document).ready(() => {
  $('span').hide();
  
  $('#to_blue').click(() => {
    $('p').css('color', '#6d9ACC');
    showMessage();
  });

  $('#to_red').click(() => {
    $('p').css('color', '#dd6552');
    showMessage();
  });

  function showMessage() {
    $('span').show().delay(2000).fadeOut('slow');
  }
})
