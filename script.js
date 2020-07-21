const playButton=document.querySelector("#playButton");
const pauseButton=document.querySelector("#pauseButton");
const stopButton=document.querySelector("#stopButton");
const textInput=document.querySelector("#text");
const speedInput=document.querySelector("#speed");
let currentCharacter;
//Event Listener for play button
playButton.addEventListener("click",function()
{
    playText(textInput.value);
});
//Event Listener for the pause button
pauseButton.addEventListener("click",function(){
    pauseText();
});
stopButton.addEventListener("click",stopText);
 //This is used for capturing the curren index of the word
 //This is used to manipulate speed while playing the etxt
speedInput.addEventListener("input",function(){
    stopText();
    playText(utterance.text.substring(currentCharacter));
});
const utterance= new SpeechSynthesisUtterance(text);
//This is used for disabling the text box when the computer is speaking.
utterance.addEventListener('end',function(){
    textInput.disabled=false;
   });
utterance.addEventListener('boundary',e => {
    currentCharacter=e.charIndex
});
//This is used to play the text using a API
function playText(text)
{
    if(speechSynthesis.speaking && speechSynthesis.paused)
   {
       //we resume the current speech 
       return speechSynthesis.resume();
   }
   if(speechSynthesis)
   {
       textInput.disabled=true;
   }
   utterance.text = text;
   //utterance.lang="en-US";
    utterance.rate=speedInput.value || 1;
    speechSynthesis.speak(utterance);
//This is used for re-abling the text box after the computer is done speaking.
}
//Function for pausing the text
function pauseText()
{
    if(speechSynthesis.speaking)
    speechSynthesis.pause();
}
function stopText()
{
    speechSynthesis.resume();//If we dont do this the code is still paused
    speechSynthesis.cancel();
}
