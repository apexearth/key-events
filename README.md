# key-events

![](https://travis-ci.org/apexearth/key-events.svg)
![](http://img.shields.io/npm/v/key-events.svg?style=flat)
![](http://img.shields.io/npm/dm/key-events.svg?style=flat)
![](http://img.shields.io/npm/l/key-events.svg?style=flat)

Provides **keydown** and **keyup** events using [vkey](https://www.npmjs.com/package/vkey)
 to developers using Node.js to develop for browsers.
 
## Usage

[![NPM](https://nodei.co/npm/key-events.png)](https://nodei.co/npm/key-events/)

### `listener = keyevents([target], [events])`

## Examples

#### Basic Usage

    const keyevents = require('key-events') // Also at window.keyevents.

    // Default target is:  document.body
    // Default events are: ['keyup', 'keydown']
    var keys = keyevents() 
    
    keys.on("keydown", function(key, event) {
        console.log(key)   // A vkey value based on the key pressed.
        console.log(event) // The original event received.
    })    
    
    keys.on("keyup", function(key, event) {
        console.log(key)   // A vkey value based on the key pressed.
        console.log(event) // The original event received.
    })

#### Custom  Target

    var keys = window.keyevents(document) // Default target is `document.body`

#### Custom Event List

    var keys = window.keyevents(['keypress']) // Default target is `document.body`

    keys.on("keypress", function(key, event) {
        console.log(key)   // A vkey value based on the key pressed.
        console.log(event) // The original event received.
    })

#### Custom Target & Event List

    var keys = window.keyevents(document, ['keypress']) // Default target is `document.body`

    keys.on("keypress", function(key, event) {
        console.log(key)   // A vkey value based on the key pressed.
        console.log(event) // The original event received.
    })
    
## Tests

- Mocha
   - Test functionality in Node.js
- Karma
   - Using browserify, test functionality in browsers
- User Testing
   - [grunt user-test](Gruntfile.js) is set to build, serve, and open [test/index.html](test/index.html)
