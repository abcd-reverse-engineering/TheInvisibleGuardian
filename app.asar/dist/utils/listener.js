"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var electron_1 = require("electron");
var system = __importStar(require("./system"));
var steam = __importStar(require("./steam"));
var setting = __importStar(require("./setting"));
var loudness = __importStar(require("loudness"));
function setResponse(cmd, sn, data) {
    var response = {
        cmd: cmd,
        sn: sn,
        ret: 0,
        data: data
    };
    return JSON.stringify(response);
}
function send(data) {
    var mainWindows = electron_1.BrowserWindow.getAllWindows();
    mainWindows.forEach(function (mainWindow) {
        mainWindow.webContents.send('ipcRenderer-listener', JSON.stringify(data));
    });
}
exports.send = send;
function init() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            electron_1.ipcMain.on('ipcMain-async-listener', function (event, arg) { return __awaiter(_this, void 0, void 0, function () {
                var response, cmd, sn, _a, info, id, appid, ticket, steamTicket, steamId, appid, msg, data, volume, data, url, result, data, type, appid, data, appid, result, data, title, msg, data, url, result, data, name_1, result, data, name_2, result, data, name_3, result;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            try {
                                response = JSON.parse(arg);
                            }
                            catch (e) {
                                response = {};
                            }
                            cmd = response.cmd;
                            sn = response.sn;
                            _a = cmd;
                            switch (_a) {
                                case 'exitGame': return [3 /*break*/, 1];
                                case 'relauchGame': return [3 /*break*/, 2];
                                case 'getSystemInfo': return [3 /*break*/, 3];
                                case 'getSteamId': return [3 /*break*/, 4];
                                case 'getSteamTicket': return [3 /*break*/, 5];
                                case 'getSteamInfo': return [3 /*break*/, 7];
                                case 'updateSetting': return [3 /*break*/, 9];
                                case 'setVolume': return [3 /*break*/, 10];
                                case 'saveFile': return [3 /*break*/, 12];
                                case 'activeOverlay': return [3 /*break*/, 14];
                                case 'getSteamAppid': return [3 /*break*/, 15];
                                case 'checkDLC': return [3 /*break*/, 16];
                                case 'showError': return [3 /*break*/, 17];
                                case 'toSteamStore': return [3 /*break*/, 18];
                                case 'activateAchievement': return [3 /*break*/, 19];
                                case 'clearAchievement': return [3 /*break*/, 21];
                                case 'getAchievement': return [3 /*break*/, 23];
                            }
                            return [3 /*break*/, 25];
                        case 1:
                            electron_1.app.exit();
                            return [3 /*break*/, 25];
                        case 2:
                            electron_1.app.relaunch();
                            electron_1.app.exit();
                            return [3 /*break*/, 25];
                        case 3:
                            {
                                info = system.getInfo();
                                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, info));
                                return [3 /*break*/, 25];
                            }
                            _b.label = 4;
                        case 4:
                            {
                                id = steam.getSteamId();
                                appid = steam.getSteamAppid();
                                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { id: id, appid: appid }));
                                return [3 /*break*/, 25];
                            }
                            _b.label = 5;
                        case 5: return [4 /*yield*/, steam.getSteamTicket()];
                        case 6:
                            ticket = _b.sent();
                            event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { ticket: ticket }));
                            return [3 /*break*/, 25];
                        case 7: return [4 /*yield*/, steam.getSteamEncry()];
                        case 8:
                            steamTicket = _b.sent();
                            if (steamTicket.ret === 0) {
                                steamId = steam.getSteamId();
                                appid = steam.getSteamAppid();
                                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { encryid: steamTicket.ticket, steamId: steamId, appid: appid }));
                            }
                            else {
                                msg = steamTicket.msg;
                                event.sender.send('ipcRenderer-async-listener', JSON.stringify({ ret: -1, cmd: cmd, sn: sn, msg: msg }));
                            }
                            return [3 /*break*/, 25];
                        case 9:
                            {
                                data = response.data;
                                setting.set(data);
                                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { msg: 'ok' }));
                                return [3 /*break*/, 25];
                            }
                            _b.label = 10;
                        case 10:
                            volume = response.data;
                            return [4 /*yield*/, loudness.setVolume(volume)];
                        case 11:
                            _b.sent();
                            event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { msg: 'ok' }));
                            return [3 /*break*/, 25];
                        case 12:
                            data = response.data;
                            url = data.url;
                            return [4 /*yield*/, steam.saveFile(url)];
                        case 13:
                            result = _b.sent();
                            if (result) {
                                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { msg: 'ok' }));
                            }
                            else {
                                event.sender.send('ipcRenderer-async-listener', JSON.stringify({ ret: -1, cmd: cmd, sn: sn, msg: '保存失败' }));
                            }
                            return [3 /*break*/, 25];
                        case 14:
                            {
                                data = response.data;
                                type = data.type;
                                steam.activeOverlay(type);
                                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { msg: 'ok' }));
                                return [3 /*break*/, 25];
                            }
                            _b.label = 15;
                        case 15:
                            {
                                appid = steam.getSteamAppid();
                                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { appid: appid }));
                                return [3 /*break*/, 25];
                            }
                            _b.label = 16;
                        case 16:
                            {
                                data = response.data;
                                appid = data.appid;
                                result = steam.checkDLC(parseInt(appid));
                                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { result: result }));
                                return [3 /*break*/, 25];
                            }
                            _b.label = 17;
                        case 17:
                            {
                                data = response.data;
                                title = data.title;
                                msg = data.msg;
                                electron_1.dialog.showErrorBox(title, msg);
                                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { msg: 'ok' }));
                                return [3 /*break*/, 25];
                            }
                            _b.label = 18;
                        case 18:
                            {
                                data = response.data;
                                url = data.url;
                                result = steam.toStore(url);
                                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { result: result }));
                                return [3 /*break*/, 25];
                            }
                            _b.label = 19;
                        case 19:
                            data = response.data;
                            name_1 = data.name;
                            return [4 /*yield*/, steam.activateAchievement(name_1)];
                        case 20:
                            result = _b.sent();
                            event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { result: result }));
                            return [3 /*break*/, 25];
                        case 21:
                            data = response.data;
                            name_2 = data.name;
                            return [4 /*yield*/, steam.clearAchievement(name_2)];
                        case 22:
                            result = _b.sent();
                            event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { result: result }));
                            return [3 /*break*/, 25];
                        case 23:
                            data = response.data;
                            name_3 = data.name;
                            return [4 /*yield*/, steam.getAchievement(name_3)];
                        case 24:
                            result = _b.sent();
                            event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { result: result }));
                            return [3 /*break*/, 25];
                        case 25: return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
exports.init = init;
//# sourceMappingURL=listener.js.map