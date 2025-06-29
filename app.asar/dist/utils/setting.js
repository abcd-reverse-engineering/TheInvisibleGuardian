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
var store = __importStar(require("./store"));
var system_1 = require("./system");
function save() {
    store.save();
}
exports.save = save;
function get(key) {
    return store.get(key);
}
exports.get = get;
function set(data) {
    var mainWindow = electron_1.BrowserWindow.getFocusedWindow();
    if (!mainWindow)
        return;
    var system = system_1.getInfo();
    var setting = Object.assign(store.get(), data);
    if (setting.fullscreen !== mainWindow.isFullScreen()) {
        mainWindow.setFullScreen(setting.fullscreen);
    }
    if (data.hasOwnProperty('fullscreen') && !data.fullscreen && !data.resize) {
        var height = Math.floor(system.screen.height * 0.7);
        var width = Math.floor(height * 16 / 9);
        mainWindow.setContentSize(width, height);
        mainWindow.center();
    }
    store.set(setting);
    if (mainWindow.isFullScreen() !== setting.fullscreen) {
        electron_1.app.relaunch();
        electron_1.app.quit();
    }
}
exports.set = set;
//# sourceMappingURL=setting.js.map