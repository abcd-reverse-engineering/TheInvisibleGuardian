"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var greenworks = require("greenworks");
var listener_1 = require("./listener");
var os = __importStar(require("os"));
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var https = __importStar(require("https"));
var url_1 = require("url");
var mkdir_1 = require("./mkdir");
var electron_1 = require("electron");
var p = process;
function init() {
    p.activateUvLoop();
    return greenworks.init();
}
exports.init = init;
function initAPI() {
    return greenworks.initAPI();
}
exports.initAPI = initAPI;
function getSteamId() {
    return greenworks.getSteamId().steamId;
}
exports.getSteamId = getSteamId;
function getSteamTicket() {
    return new Promise(function (resolve) {
        greenworks.getAuthSessionTicket(function (data) {
            resolve({ ret: 0, code: 0, ticket: data.ticket.toString('hex') });
        }, function (err) {
            console.error(err);
            resolve({ ret: -1, code: -1 });
        });
    });
}
exports.getSteamTicket = getSteamTicket;
function getSteamEncry() {
    return new Promise(function (resolve) {
        greenworks.getEncryptedAppTicket('NPCStudio', function (ticket) {
            resolve({ ret: 0, code: 0, ticket: ticket.toString('hex') });
        }, function (err) {
            console.error(err);
            resolve({ ret: -1, code: -1, msg: err });
        });
    });
}
exports.getSteamEncry = getSteamEncry;
function steamRunning() {
    return greenworks.isSteamRunning();
}
exports.steamRunning = steamRunning;
function launchSteam(appid) {
    var result = greenworks.restartAppIfNecessary(appid);
}
exports.launchSteam = launchSteam;
function isOverlayEnabled() {
    return greenworks.isGameOverlayEnabled();
}
exports.isOverlayEnabled = isOverlayEnabled;
function activeOverlay(type) {
    greenworks.activateGameOverlay(type);
}
exports.activeOverlay = activeOverlay;
function getSteamUser(steamid) {
    if (steamid === void 0) { steamid = getSteamId(); }
    greenworks.requestUserInformation(steamid, true);
}
function getSteamAppid() {
    return greenworks.getAppId();
}
exports.getSteamAppid = getSteamAppid;
function addListener() {
    greenworks.on('micro-txn-authorization-response', function (appid, orderid, authorized) {
        listener_1.send({ 'channel': 'micropay', 'appid': appid, 'orderid': orderid, 'authorized': authorized });
    });
    greenworks.on('dlc-installed', function (appid) {
        listener_1.send({ 'channel': 'dlcInstall', 'appid': appid });
    });
}
exports.addListener = addListener;
function checkDLC(id) {
    if (!id)
        return false;
    return greenworks.isDLCInstalled(id);
}
exports.checkDLC = checkDLC;
function saveFile(url) {
    return new Promise(function (resolve) {
        var parsed = url_1.parse(url);
        var dir = path.join(os.homedir(), 'Desktop', 'TheInvisibleGuardian/');
        if (!fs.existsSync(dir)) {
            mkdir_1.mkdirP.sync(dir);
        }
        var fileName = path.basename(parsed.pathname);
        var dest = path.resolve(dir, fileName);
        var file = fs.createWriteStream(dest);
        https.get(url, function (response) {
            response.pipe(file);
            file.on('finish', function () {
                resolve(true);
            });
        }).on('error', function (err) {
            file.destroy();
            fs.unlinkSync(dest);
            resolve(false);
        });
    });
}
exports.saveFile = saveFile;
function activateAchievement(name) {
    return new Promise(function (resolve) {
        greenworks.activateAchievement(name, function () {
            resolve(true);
        }, function () {
            resolve(false);
        });
    });
}
exports.activateAchievement = activateAchievement;
function clearAchievement(name) {
    return new Promise(function (resolve) {
        greenworks.clearAchievement(name, function () {
            resolve(true);
        }, function () {
            resolve(false);
        });
    });
}
exports.clearAchievement = clearAchievement;
function getAchievement(name) {
    return new Promise(function (resolve) {
        greenworks.getAchievement(name, function (result) {
            resolve(result);
        });
    });
}
exports.getAchievement = getAchievement;
function toStore(url) {
    if (os.platform() === 'win32') {
        greenworks.activateGameOverlayToWebPage(url);
        return true;
    }
    else if (os.platform() === 'darwin') {
        electron_1.shell.openExternal(url);
        return true;
    }
}
exports.toStore = toStore;
//# sourceMappingURL=steam.js.map