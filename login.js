const gameText=document.getElementByld('game-text2');
const userInput=document.getElementByld('user-input2');
const submitBtn =document.getElementByld('submit-btn2');
function print(text) {
  gameText.innerText +=text + "\n";
  gameText.scrollTop =gameText.scrollHeight;
}
function sleep(ms) {
  return new Promise(resolve=> setTimeout(resolve, ms));
}
let currentStep="askUsername";
let username="";
