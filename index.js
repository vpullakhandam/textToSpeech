let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

let historyList = [];
let bookmarks = [];

window.speechSynthesis.onvoiceschanged = listOfVoices;

voiceSelect.addEventListener("change", changeVoice);
document.querySelector("#listenButton").addEventListener("click", play);
document.querySelector("#historyButton").addEventListener("click", showHistory);
document
  .querySelector("#bookmarkButton")
  .addEventListener("click", bookmarkText);

function play() {
  document.querySelector("#listenButton").style.backgroundColor = "#0f172a";
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
  addToHistory(speech.text);
  speech.onend = function () {
    finished();
  };
}

function finished() {
  document.querySelector("#listenButton").style.backgroundColor = "#64748b";
}

function listOfVoices() {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
}

function changeVoice() {
  speech.voice = voices[voiceSelect.value];
}

function addToHistory(text) {
  historyList.push(text);
}

function showHistory() {
  let historyText = "History:\n";
  historyList.forEach((text, index) => {
    historyText += `${index + 1}. ${text}\n`;
  });
  alert(historyText);
}

function bookmarkText() {
  let currentText = document.querySelector("textarea").value;
  bookmarks.push(currentText);
  alert("Text bookmarked!");
}

document
  .querySelector("#showBookmarksButton")
  .addEventListener("click", toggleBookmarks);

function toggleBookmarks() {
  let bookmarksContainer = document.querySelector(".bookmarks-container");
  if (bookmarksContainer.style.display === "none") {
    bookmarksContainer.style.display = "block";
    updateBookmarks(); // Populate bookmarks container when shown
  } else {
    bookmarksContainer.style.display = "none";
  }
}

function updateBookmarks() {
  let bookmarksContainer = document.querySelector(".bookmarks-container");
  bookmarksContainer.innerHTML = "";
  let bookmarksTitle = document.createElement("h4");
  bookmarksTitle.textContent = "Bookmarks:";
  bookmarksContainer.appendChild(bookmarksTitle);
  bookmarks.forEach((text, index) => {
    let bookmarkElement = document.createElement("div");
    bookmarkElement.classList.add("bookmark");
    let bookmarkText = document.createElement("p");
    bookmarkText.classList.add("bookmark-text");
    bookmarkText.textContent = text;
    bookmarkElement.appendChild(bookmarkText);
    bookmarksContainer.appendChild(bookmarkElement);
  });
}

document.querySelector("#listenButton").addEventListener("click", play);
document.querySelector("#historyButton").addEventListener("click", showHistory);
document
  .querySelector("#bookmarkButton")
  .addEventListener("click", bookmarkText);
document
  .querySelector("#showBookmarksButton")
  .addEventListener("click", toggleBookmarks);
