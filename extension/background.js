chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'playSpeech') {
        var utterance = new SpeechSynthesisUtterance(message.text);
        window.speechSynthesis.speak(utterance);
    }
});
