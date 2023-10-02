let speech = new SpeechSynthesisUtterance();

// create a list of option of voices
let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = listOfVoices;

// changes the voice when we click on the option in the dropdown from select
voiceSelect.addEventListener("change", changeVoice);

// clicking the button invokes playing the audio
document.querySelector("button").addEventListener("click", play);

function play() {
  document.querySelector("button").style.backgroundColor = "#0f172a";
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
  speech.onend = function () {
    finished();
  };
}
function finished() {
  document.querySelector("button").style.backgroundColor = "#64748b";
}
function listOfVoices() {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0]; // default is the first voice on the system.
  const i = 1;
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
}
function changeVoice() {
  speech.voice = voices[voiceSelect.value];
}
