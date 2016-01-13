# key-events
![](https://travis-ci.org/apexearth/key-events.svg)
![](http://img.shields.io/npm/v/key-events.svg?style=flat)
![](http://img.shields.io/npm/dm/key-events.svg?style=flat)
![](http://img.shields.io/npm/l/key-events.svg?style=flat)

Provides **keydown** and **keyup** events using [vkey](https://www.npmjs.com/package/vkey)
 to developers using Node.js to develop for browsers.
 
## Usage

[![NPM](https://nodei.co/npm/key-events.png)](https://nodei.co/npm/key-events/)

### `listener = keyevents([target = document.body])`

## Example

    var key = window.keyevents(document) // Default target is `document.body`
    key.on("keydown", function(e) {
        // Event contents are vkey values: https://www.npmjs.com/package/vkey
        document.getElementById("output").innerText = e;
    })
    
## Events

- keydown
- keyup

## Tests

- Mocha
   - Test functionality in Node.js
- Karma
   - Using browserify, test functionality in browsers
- User Testing
   - [grunt user-test](Gruntfile.js) is set to build, serve, and open [test/index.html](test/index.html)