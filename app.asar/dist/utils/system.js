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
var os = __importStar(require("os"));
var system = {
    uptime: os.uptime(),
    platform: os.platform(),
    hostname: os.hostname(),
    release: os.release(),
    type: os.type(),
    arch: os.arch(),
    eol: os.EOL,
    endianness: os.endianness(),
    loadavg: os.loadavg(),
    network: os.networkInterfaces() // 网络
};
var memory = {
    freemem: os.freemem(),
    totalmem: os.totalmem()
};
var cpus = os.cpus();
function getInfo() {
    var mainScreen = electron_1.screen.getPrimaryDisplay();
    var screenSize = mainScreen.size;
    var G = 1024 * 1024 * 1024;
    var systemInfo = {
        type: os.type() + " " + os.release() + " " + os.arch(),
        totalmem: (memory.totalmem / G).toFixed(2) + "G",
        freemem: (memory.freemem / G).toFixed(2) + "G",
        cpu: cpus[0].model + "-" + cpus.length + "Cores"
    };
    var info = {
        screen: screenSize,
        system: systemInfo,
        platform: os.platform(),
        custom: store.get(),
        app: {
            path: electron_1.app.getAppPath()
        }
    };
    return info;
}
exports.getInfo = getInfo;
//# sourceMappingURL=system.js.map