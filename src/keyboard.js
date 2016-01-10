var EventEmitter = require("events").EventEmitter
var util         = require("util")
var vkey         = require("vkey")
var browser      = require("./browser")

module.exports           = keyboard;
browser.window.keyevents = keyboard;

function keyboard(target) {
    return new Keyboard(target);
}

function Keyboard(target) {
    EventEmitter.call(this);
    var that = this;
    target   = target || browser.document.body;

    target.addEventListener("keydown", function (event) {
        that.emit("keydown", vkey[event.keyCode]);
    });

    target.addEventListener("keyup", function (event) {
        that.emit("keyup", vkey[event.keyCode]);
    });
}
util.inherits(Keyboard, EventEmitter);