let items = document.querySelector('#items');
items.addEventListener('wheel', event => {
  if (event.deltaY > 0) {
    event.currentTarget.scrollBy(300, 0);
  } else {
    event.currentTarget.scrollBy(-300, 0);
  }
});
