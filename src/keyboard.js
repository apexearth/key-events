var EventEmitter = require("events").EventEmitter
var util         = require("util")
var vkey         = require("vkey")
var browser      = require("./browser")

module.exports           = keyboard;
browser.window.keyevents = keyboard;

function keyboard(target, events) {
    return new Keyboard(target, events);
}

function Keyboard(target, events) {
    EventEmitter.call(this);
    var that = this;
    if (target && target.constructor === Array) {
        events = target;
        target = null;
    }
    target = target || browser.document.body
    events = events || [
            "keydown",
            "keyup"
        ]

    for (var i = 0; i < events.length; i++) {
        (function (eventName) {
            target.addEventListener(eventName, function (event) {
                that.emit(eventName, vkey[event.keyCode], event)
            })
        })(events[i])
    }
}
util.inherits(Keyboard, EventEmitter);