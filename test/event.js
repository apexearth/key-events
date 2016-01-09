var browser = require("../src/browser");

module.exports = {
    trigger: function (target, name, content) {
        var document = browser.document;
        var event    = document.createEvent('Event');
        for (var key in content) {
            if (content.hasOwnProperty(key))
                event[key] = content[key];
        }
        event.initEvent(name, true, false);
        target.dispatchEvent(event);
    }
};
