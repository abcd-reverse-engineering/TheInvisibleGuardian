"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var electron_1 = require("electron");
var setting = __importStar(require("./setting"));
var listener_1 = require("./listener");
function init() {
    electron_1.globalShortcut.register('Alt+Enter', function () {
        var currentFullscreen = setting.get('fullscreen');
        setting.set({ fullscreen: !currentFullscreen });
        listener_1.send({ 'channel': 'setting', 'fullscreen': !currentFullscreen });
    });
}
exports.init = init;
//# sourceMappingURL=shortcut.js.map