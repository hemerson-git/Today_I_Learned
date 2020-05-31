$(document).ready(() => {
  $('a').click(e => {
    let val = e.currentTarget.text;
    $(`img:not(i${val})`).hide();
    $(`#i${val}`).show();
  });
});
