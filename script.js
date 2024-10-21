// ==UserScript==
// @name         Arc Webpage Fullscreen Toggle
// @namespace    http://yournamespace.com/
// @version      1.0
// @description  Toggle fullscreen for webpage with Ctrl+F11 for Arc browser
// @author       unkn1wn
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Add event listener for keydown
    document.addEventListener('keydown', function(event) {
        // Check for Ctrl + F11
        if (event.ctrlKey && event.key === 'F11') {
            toggleFullscreen();
        }
    });

    // Fullscreen toggle function
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
})();
