var browser     = require("../src/browser")
var MockBrowser = require('mock-browser').mocks.MockBrowser;
var mock        = new MockBrowser();

browser.window   = mock.getWindow()
browser.document = mock.getDocument()

require("./keyboard-Spec.js")
