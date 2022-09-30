const { body } = document;


try {
  body.style.backgroundColor = lumiance('#6633cc', 0.2);
} catch (e) {
  
}

function lumiance(hex, luminocity = 0) {
  // Lófica para converter o hex em uma cor mais clara
  // aceitar hex decimal de 3 ou 6 dígitos

  hex - hex.replace(/[^0-9a-f]/gi, '');
  const isValidHex = hex.length === 6 || hex.length === 3;

  if(!isValidHex) throw new Error('Invalid HEX');
  // se for 3 dígitos, transformar para 6 dígitos

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  
  const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi);
  
  return hex;
}
