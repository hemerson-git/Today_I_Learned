//Selecting all keys
const keys = document.querySelectorAll('.key');
const audios = document.querySelectorAll('.audios audio');
let codes = []; 
keys.forEach(keyItem => codes.push(keyItem.dataset.key));

//play notes
function playNote(event) {
  audios.forEach(audio => {
    let audioKey = audio.getAttribute('data-key');
    if (audioKey.toString() === getCode(event)) {
      audio.currentTime = 0;

      //adiciona a classe à tecla pressionada
      addClass(getCode(event));
      audio.play();
      return;
    }
  })
}

function addClass(key) {
  document.querySelector(`.key[data-key="${key}"]`).classList.add('playing');
}

function removeClass(event) {
  event.target.classList.remove('playing');
}

function getCode(event) {
  if (event.type === 'click') {
    const code = event.target.getAttribute('data-key');
    return getKeyCode(code);
  } else if (event.type === 'keydown') {
    return getKeyCode(event.keyCode);
  }
}

function getKeyCode(key) {
  if (!!key && codes.includes(key.toString())) {
    return key.toString();
  } else {
    return false;
  }
}

//Mouse Click
window.addEventListener('click', playNote);
window.addEventListener('transitionend', removeClass);

//Keyboard press
window.addEventListener('keydown', playNote);
