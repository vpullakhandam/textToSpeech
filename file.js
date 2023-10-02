let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = VoiceChanged;

voiceSelect.addEventListener("change",changeVoice);

document.querySelector("button").addEventListener("click", play);

function play() {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
}
function VoiceChanged() {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0]; // default is the first voice on the system.
  const i = 1;
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
}
function changeVoice(){
    speech.voice=voices[voiceSelect.value];
}
