// let speech = new SpeechSynthesisUtterance();

// document.querySelector("#listenButton").addEventListener("click", () => {
//   let text = document.querySelector("textarea").value;
//   speech.text = text;
//   window.speechSynthesis.speak(speech);
// });


let speech = new SpeechSynthesisUtterance();
speech.voice = speechSynthesis.getVoices().find(voice => voice.name === "Rishi");
document.querySelector("#listenButton").addEventListener("click", () => {
  let text = document.querySelector("textarea").value;
  speech.text = text;
  window.speechSynthesis.speak(speech);
});
