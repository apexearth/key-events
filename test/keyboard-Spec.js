var expect   = require("expect")
var event    = require("./event.js")
var keyboard = require("../src/keyboard.js")
var browser  = require("../src/browser.js")

describe("keyboard.js", function () {

    var kbTarget = browser.document.body;
    it("should detect keydown events", function () {
        var kb   = keyboard();
        var test = undefined;
        kb.on("keydown", function (key) {
            test = key;
        })
        event.trigger(kbTarget, "keydown", {keyCode: 65})
        expect(test).toEqual('A')
        kb.removeAllListeners();
    })

    it("should detect keyup events", function () {
        var kb   = keyboard();
        var test = undefined;
        kb.on("keyup", function (key) {
            test = key;
        })
        event.trigger(kbTarget, "keyup", {keyCode: 65})
        expect(test).toEqual('A')
        kb.removeAllListeners();
    })

    it("should accept a custom target", function () {
        var kb = keyboard(browser.window)
        expect(browser.window).toNotBe(kbTarget)

        var test = undefined;
        kb.on("keyup", function (key) {
            test = key;
        })
        event.trigger(browser.window, "keyup", {keyCode: 65})
        expect(test).toEqual('A')
        kb.removeAllListeners();
    })

    it("accepts list of events", function () {
        var kb   = keyboard(["testevent"]);
        var test = undefined;
        kb.on("testevent", function (e) {
            test = e
        })
        event.trigger(kbTarget, "testevent", {keyCode: 65})
        expect(test).toEqual('A')
        kb.removeAllListeners()
    })

    it("overrides default events", function () {
        var kb   = keyboard([]);
        var test = undefined;
        kb.on("keydown", function (e) {
            test = e
        })
        event.trigger(kbTarget, "keydown", {keyCode: 65})
        expect(test).toNotExist()
        kb.removeAllListeners()
    })

})