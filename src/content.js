chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'playPause') {
        // Code to play/pause YouTube video
    } else if (message.action === 'rewind') {
        // Code to rewind YouTube video
    } else if (message.action === 'forward') {
        // Code to forward YouTube video
    } else if (message.action === 'volumeDown') {
        // Code to decrease volume of YouTube video
    } else if (message.action === 'volumeUp') {
        // Code to increase volume of YouTube video
    }
});