document.addEventListener('DOMContentLoaded', () => {
  let progress = 0;
  let increment = 1;
  let progressBar = document.querySelector('#bar');
  
  let progressInterval = setInterval(() => {
    progress += increment;
    progressBar.value = progress;

    if(progress >= 100) {
      clearInterval (progressInterval);
    }
  }, 100);
});
