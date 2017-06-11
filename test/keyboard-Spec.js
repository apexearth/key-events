var expect   = require("chai").expect
var event    = require("./event.js")
var keyboard = require("../src/keyboard.js")
var browser  = require("../src/browser.js")

describe("keyboard.js", function () {

    var kbTarget = browser.document.body;
    it("should detect keydown events", function () {
        var kb             = keyboard();
        var triggeredEvent = {keyCode: 65}
        var test           = undefined;
        var testEvent      = undefined;
        kb.on("keydown", function (k, e) {
            test      = k;
            testEvent = e;
        })
        event.trigger(kbTarget, "keydown", triggeredEvent)
        expect(test).to.equal('A')
        expect(testEvent.keyCode).to.equal(triggeredEvent.keyCode)
        kb.removeAllListeners();
    })

    it("should detect keyup events", function () {
        var kb             = keyboard();
        var triggeredEvent = {keyCode: 65}
        var test           = undefined;
        var testEvent      = undefined;
        kb.on("keyup", function (k, e) {
            test      = k;
            testEvent = e;
        })
        event.trigger(kbTarget, "keyup", triggeredEvent)
        expect(test).to.equal('A')
        expect(testEvent.keyCode).to.equal(triggeredEvent.keyCode)
        kb.removeAllListeners();
    })

    it("should accept a custom target", function () {
        var kb = keyboard(browser.window)
        expect(browser.window).to.not.equal(kbTarget)

        var test = undefined;
        kb.on("keyup", function (key) {
            test = key;
        })
        event.trigger(browser.window, "keyup", {keyCode: 65})
        expect(test).to.equal('A')
        kb.removeAllListeners();
    })

    it("accepts list of events", function () {
        var kb   = keyboard(["testevent"]);
        var test = undefined;
        kb.on("testevent", function (e) {
            test = e
        })
        event.trigger(kbTarget, "testevent", {keyCode: 65})
        expect(test).to.equal('A')
        kb.removeAllListeners()
    })

    it("accepts list of events, with custom target", function () {
        var kb   = keyboard(browser.window, ["testevent"]);
        var test = undefined;
        kb.on("testevent", function (e) {
            test = e
        })
        event.trigger(browser.window, "testevent", {keyCode: 65})
        expect(test).to.equal('A')
        kb.removeAllListeners()
    })

    it("overrides default events", function () {
        var kb   = keyboard([]);
        var test = undefined;
        kb.on("keydown", function (e) {
            test = e
        })
        event.trigger(kbTarget, "keydown", {keyCode: 65})
        expect(test).to.not.exist
        kb.removeAllListeners()
    })

})