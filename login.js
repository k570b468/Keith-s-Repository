const gameText=document.getElementByld('game-text2');
const userInput=document.getElementByld('user-input2');
const submitBtn =document.getElementByld('submit-btn2');
function print(text) {
  gameText.innerText +=text + "\n";
  gameText.scrollTop =gameText.scrollHeight;
}
function sleep(ms){
  return new Promise(resolve=> setTimeout(resolve, ms));
}
let currentStep="askUsername";
let username="";
submitBtn.addEventListener("click",async () =>{
  const input=userInput.value.trim();
  userInput.value="";
if(currentStep==="askUsername"){
  username=input;
  if(username==="student"||username==="teacher"){
    print("Thank you.");
    await sleep(1000);
    print("Please input password:");
    currentStep="askPassword";
  }else {
    print("Incorrect username. Please refresh page and try again.");
    currentStep="end";
  }
  }
}else if (currentStep==="askPassword"){
  const password1=input;
  
  
