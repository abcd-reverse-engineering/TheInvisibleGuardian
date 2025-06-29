"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var electron = require('electron');
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var defaults = {
    "bgm": true,
    "displayWidth": 0,
    "displayHeight": 0,
    "fullscreen": true,
    "volume": 1,
    "effect": true
};
var userDataPath = (electron.app || electron.remote.app).getPath('userData');
var settingPath = path.join(userDataPath, 'setting.json');
var data = parseDataFile(settingPath, defaults);
function get(key) {
    if (key) {
        return data[key];
    }
    else {
        return data;
    }
}
exports.get = get;
function set(key, val) {
    if (!val && typeof key === 'object') {
        data = Object.assign(data, key);
    }
    else {
        data[key] = val;
    }
}
exports.set = set;
function save() {
    fs.writeFileSync(settingPath, JSON.stringify(data));
}
exports.save = save;
function parseDataFile(filePath, defaults) {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    catch (error) {
        return defaults;
    }
}
//# sourceMappingURL=store.js.map