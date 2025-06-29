"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
/// <reference path="./declare/greenworks.d.ts" />
var electron = require('electron');
var _a = require('@sentry/electron'), init = _a.init, captureException = _a.captureException;
var electron_1 = require("electron");
;
var path = __importStar(require("path"));
var os = __importStar(require("os"));
var steam = __importStar(require("./utils/steam"));
var shortcut = __importStar(require("./utils/shortcut"));
var listener = __importStar(require("./utils/listener"));
var setting = __importStar(require("./utils/setting"));
var crash = __importStar(require("./utils/crash"));
var resize = __importStar(require("./utils/resize"));
init({
    dsn: 'https://203444996f76484988e29587a80e3e9d@report.url.cn/sentry/909'
});
crash.init();
electron_1.app.setName('隐形守护者');
electron_1.app.commandLine.appendSwitch('ignore-connections-limit', 'domains');
electron_1.app.commandLine.appendSwitch('in-process-gpu');
electron_1.app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
electron_1.app.commandLine.appendSwitch('auto-detect', 'false');
electron_1.app.commandLine.appendSwitch('no-proxy-server');
var mainWindow;
var blocker;
var isWin32 = os.platform() === 'win32';
function createWindow() {
    if (steam.init() && steam.initAPI()) {
        var custom = setting.get();
        var showed_1 = false;
        var options = {
            frame: true,
            fullscreen: custom.fullscreen,
            show: !isWin32,
            enableLargerThanScreen: true,
            maximizable: false,
            minWidth: 852 + 6,
            minHeight: 480 + 28,
            icon: path.join(__dirname, isWin32 ? '../icon/ico.ico' : '../icon/ico.icns'),
            webPreferences: { webSecurity: false }
        };
        // Create the browser window.
        mainWindow = new electron_1.BrowserWindow(options);
        //setMenu
        mainWindow.setMenu(null);
        //setScreen
        if (!custom.fullscreen) {
            var width = void 0, height = void 0;
            if (custom.displayWidth !== 0 && custom.displayHeight !== 0) {
                width = custom.displayWidth;
                height = custom.displayHeight;
            }
            else {
                var mainScreen = electron.screen.getPrimaryDisplay();
                var screenSize = mainScreen.size;
                width = screenSize.width;
                height = screenSize.height;
            }
            //setSize
            mainWindow.setContentSize(width, Math.floor(width * (9 / 16)));
            //makeCenter
            mainWindow.center();
        }
        ;
        // and load the index.html of the app.
        mainWindow.loadFile(path.join(__dirname, "../app/index.html"));
        // Open the DevTools.
        //mainWindow.webContents.openDevTools();
        var filter = {
            urls: ['https://*.npcstudio.cn/*']
        };
        electron_1.session.defaultSession.webRequest.onBeforeSendHeaders(filter, function (details, callback) {
            details.requestHeaders['Origin'] = 'https://www.npcstudio.cn';
            callback({ cancel: false, requestHeaders: details.requestHeaders });
        });
        //保护
        if (isWin32) {
            var showTimer_1 = setTimeout(function () {
                if (showed_1)
                    return;
                showed_1 = true;
                mainWindow.show();
            }, 5000);
            mainWindow.once('ready-to-show', function () {
                if (showed_1)
                    return;
                showed_1 = true;
                mainWindow.show();
                clearTimeout(showTimer_1);
            });
            mainWindow.webContents.once('dom-ready', function () {
                if (showed_1)
                    return;
                showed_1 = true;
                mainWindow.show();
                clearTimeout(showTimer_1);
            });
        }
        // Emitted when the window is closed.
        mainWindow.on("closed", function () {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            mainWindow = null;
            electron_1.app.quit();
        });
        //maximize
        mainWindow.on('maximize', function (event) {
            setting.set({ fullscreen: true });
            event.preventDefault();
        });
        //crashed
        mainWindow.webContents.on('crashed', function () {
            mainWindow.destroy();
            mainWindow.reload();
        });
        //最小化
        mainWindow.on('minimize', function () {
            mainWindow.webContents.send('ipcRenderer-listener', JSON.stringify({ 'channel': 'minimize' }));
        });
        //恢复
        mainWindow.on('restore', function () {
            mainWindow.webContents.send('ipcRenderer-listener', JSON.stringify({ 'channel': 'restore' }));
        });
        mainWindow.on('unresponsive', function () {
            electron_1.app.relaunch();
            electron_1.app.quit();
        });
        //阻止系统进入休眠
        blocker = electron_1.powerSaveBlocker.start('prevent-display-sleep');
        listener.init();
        shortcut.init();
        resize.init(mainWindow);
        steam.addListener();
    }
    else {
        electron_1.dialog.showErrorBox('异常', 'steam 接口初始化失败');
    }
}
var gotTheLock = electron_1.app.requestSingleInstanceLock();
if (!gotTheLock || !steam.steamRunning()) {
    if (!steam.steamRunning()) {
        steam.launchSteam(998940);
    }
    electron_1.app.quit();
}
else {
    electron_1.app.on('second-instance', function (event, commandLine, workingDirectory) {
        // Someone tried to run a second instance, we should focus our window.
        if (mainWindow) {
            if (mainWindow.isMinimized())
                mainWindow.restore();
            mainWindow.focus();
        }
    });
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    electron_1.app.on("ready", createWindow);
    // Quit when all windows are closed.
    electron_1.app.on("window-all-closed", function () {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== "darwin") {
            electron_1.app.quit();
        }
    });
    electron_1.app.on('quit', function () {
        electron_1.powerSaveBlocker.stop(blocker);
        setting.save();
    });
    electron_1.app.on("activate", function () {
        // On OS X it"s common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (mainWindow === null) {
            createWindow();
        }
    });
    process.on('uncaughtException', function (e) {
        captureException(e);
        electron_1.dialog.showErrorBox('异常', e.message);
        electron_1.app.quit();
    });
}
//# sourceMappingURL=main.js.map