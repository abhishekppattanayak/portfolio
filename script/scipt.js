const intro = document.getElementById('intro');

const props = "a student| a web enthusiast| passionate for AI".split('|');
const text = "Hi! I am ";
let i = 0;

function updateIntroText() {
  intro.textContent = text + props[i] + '.';
  i = (i + 1) % props.length; 
}

setInterval(updateIntroText, 1300);
