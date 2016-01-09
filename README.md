# keyboard

Provides `keydown` and `keyup` events to developers using Node.js to develop for browsers.

## Usage

    var key = window.keyboard(document) // Default target is `document.body`
    key.on("keydown", function(e) {
        // Event contents are vkey values: https://www.npmjs.com/package/vkey
        document.getElementById("output").innerText = e;
    })
    
## Events

- keydown
- keyup
