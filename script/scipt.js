const intro = document.getElementById('intro');
const list = "a student.    | a web enthusiast.    | passionate for AI and ML.    ".split('|');
let currentIndex = 0;

function typeText(textElement, text, speed, callback) {
  let index = 0;
  let timer = setInterval(function() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(timer);
      if (callback) callback();
    }
  }, speed);
}

function backspaceText(textElement, text, deleteSpeed, callback) {
  let index = text.length - 1;
  let timer = setInterval(function() {
    if (index >= "Hi! I am ".length) {
      textElement.textContent = textElement.textContent.substring(0, textElement.textContent.length - 1);
      index--;
    } else {
      clearInterval(timer);
      if (callback) callback();
    }
  }, deleteSpeed);
}

function animateText() {
  if (currentIndex < list.length) {
    const listItem = list[currentIndex];
    typeText(intro, listItem, 120, function() {
      backspaceText(intro, "Hi! I am " + listItem, 100, function() {
        currentIndex = (currentIndex + 1) % list.length;
        animateText();
      });
    });
  }
}

animateText();
