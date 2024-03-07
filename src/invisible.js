// Selecting elements on the YouTube video player and hiding them
['ytp-chrome-top', 'ytp-chrome-controls', 'ytp-gradient-top', 'ytp-gradient-bottom', 'ytp-progress-bar', 'ytp-progress-bar-container'].forEach(function(className) {
    const element = document.querySelector('.' + className);
    if (element) {
        element.style.visibility = 'hidden';
    }
});