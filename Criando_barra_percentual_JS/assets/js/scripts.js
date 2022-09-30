// Criar a barrinha 

let bar = document.createElement('div');

//Pegar o tamanho do container do text
const postWrap = document.querySelector('.post-wrap');
let actualPercentFromTop = 0;

// Estilo da barrinha
bar.style.height = '4px';
bar.style.width = '0';
bar.style.backgroundColor = '#6633cc';
bar.style.position = 'fixed';
bar.style.top = '0';
bar.style.left = '0';
bar.style.zIndex = '9999';
bar.style.transition = '0.2s'

//Adiciona o elemento no corpo da página
document.body.append(bar);

// atualizaa a barrinha
function updateBar() {
  // Tamanho do container que contém o texto
  const textHeight = postWrap.offsetHeight;

  //verificar em qual posição da página estamos
  const pageYPosition = window.pageYOffset;
  if ((pageYPosition * 100 / textHeight) <= 100) {
     actualPercentFromTop = pageYPosition * 100 / textHeight;
     bar.style.width = `${actualPercentFromTop}%`;
    } else {
      bar.style.width = `100%`;
  }
}

// verificar o movimento do scroll
window.addEventListener('load', () => {
  document.addEventListener('scroll', updateBar);
});
