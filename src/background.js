// Variable to track if controls are hidden
let areControlsHidden = false;

// Listen for the "hide" command
chrome.commands.onCommand.addListener(function(command) {
  // When the "hide" command is triggered
  if (command === "hide") {
    // Fetch details about the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      // Get the URL of the active tab
      const currentTabUrl = tabs[0].url;
      // Check if it's a YouTube video
      const isOnYouTube = currentTabUrl.includes("youtube.com/watch?");
      
      // If it's a YouTube video
      if (isOnYouTube) {
        // Toggle controls visibility
        chrome.tabs.executeScript({ 
          file: areControlsHidden ? 'src/visible.js' : 'src/invisible.js' 
        });
        // Update controls visibility state
        areControlsHidden = !areControlsHidden;
      }
    });
  }
});