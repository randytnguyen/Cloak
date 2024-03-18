// Send message to content script to control YouTube player
function sendMessage(action) {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
       chrome.tabs.sendMessage(tabs[0].id, {action: action});
   });
}

document.getElementById('playPauseButton').addEventListener('click', function() {
   sendMessage('playPause');
});
document.getElementById('rewindButton').addEventListener('click', function() {
   sendMessage('rewind');
});
document.getElementById('forwardButton').addEventListener('click', function() {
   sendMessage('forward');
});
document.getElementById('volumeDownButton').addEventListener('click', function() {
   sendMessage('volumeDown');
});
document.getElementById('volumeUpButton').addEventListener('click', function() {
   sendMessage('volumeUp');
});