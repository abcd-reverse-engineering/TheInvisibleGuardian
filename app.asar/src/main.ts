/// <reference path="./declare/greenworks.d.ts" />
const electron = require('electron');
const { init, captureException } = require('@sentry/electron');

import { app, BrowserWindow, powerSaveBlocker, session, dialog } from "electron";;
import * as path from "path";
import * as os from "os";
import * as steam from './utils/steam';
import * as shortcut from './utils/shortcut';
import * as listener from './utils/listener';
import * as setting from './utils/setting';
import * as crash from './utils/crash';
import * as resize from './utils/resize';

init({
  dsn: 'https://203444996f76484988e29587a80e3e9d@report.url.cn/sentry/909',
});
crash.init();

app.setName('隐形守护者');
app.commandLine.appendSwitch('ignore-connections-limit', 'domains');
app.commandLine.appendSwitch('in-process-gpu');
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
app.commandLine.appendSwitch('auto-detect', 'false');
app.commandLine.appendSwitch('no-proxy-server');


let mainWindow: Electron.BrowserWindow;
let blocker: number;
let isWin32 = os.platform() === 'win32';

function createWindow(): void {
  if (steam.init() && steam.initAPI()) {
    let custom = setting.get();

    let showed = false

    let options: any = {
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
    mainWindow = new BrowserWindow(options);
    //setMenu
    mainWindow.setMenu(null);
    //setScreen
    if (!custom.fullscreen) {
      let width, height;

      if (custom.displayWidth !== 0 && custom.displayHeight !== 0) {
        width = custom.displayWidth;
        height = custom.displayHeight;
      } else {
        let mainScreen = electron.screen.getPrimaryDisplay();
        let screenSize = mainScreen.size;
        width = screenSize.width;
        height = screenSize.height;
      }
      //setSize
      mainWindow.setContentSize(width, Math.floor(width * (9 / 16)));
      //makeCenter
      mainWindow.center()
    };
    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, "../app/index.html"));

    // Open the DevTools.
    //mainWindow.webContents.openDevTools();

    const filter = {
      urls: ['https://*.npcstudio.cn/*']
    }

    session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details: any, callback: Function) => {
      details.requestHeaders['Origin'] = 'https://www.npcstudio.cn';
      callback({ cancel: false, requestHeaders: details.requestHeaders });
    });

    //保护

    if (isWin32) {
      let showTimer = setTimeout(() => {
        if (showed) return
        showed = true;
        mainWindow.show();
      }, 5000)

      mainWindow.once('ready-to-show', () => {
        if (showed) return
        showed = true;
        mainWindow.show();
        clearTimeout(showTimer);
      })

      mainWindow.webContents.once('dom-ready', () => {
        if (showed) return
        showed = true;
        mainWindow.show();
        clearTimeout(showTimer);
      })
    }



    // Emitted when the window is closed.
    mainWindow.on("closed", () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
      app.quit();
    });

    //maximize
    mainWindow.on('maximize', (event: any) => {
      setting.set({ fullscreen: true });
      event.preventDefault();
    });

    //crashed
    mainWindow.webContents.on('crashed', () => {
      mainWindow.destroy();
      mainWindow.reload();
    })

    //最小化
    mainWindow.on('minimize', () => {
      mainWindow.webContents.send('ipcRenderer-listener', JSON.stringify({ 'channel': 'minimize' }))
    })

    //恢复
    mainWindow.on('restore', () => {
      mainWindow.webContents.send('ipcRenderer-listener', JSON.stringify({ 'channel': 'restore' }))
    })

    mainWindow.on('unresponsive', () => {
      app.relaunch();
      app.quit();
    })

    //阻止系统进入休眠
    blocker = powerSaveBlocker.start('prevent-display-sleep');
    listener.init();
    shortcut.init();
    resize.init(mainWindow);
    steam.addListener();

  } else {
    dialog.showErrorBox('异常', 'steam 接口初始化失败')
  }
}

const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock || !steam.steamRunning()) {
  if (!steam.steamRunning()) {
    steam.launchSteam(998940);
  }
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on("ready", createWindow);

  // Quit when all windows are closed.
  app.on("window-all-closed", () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

  app.on('quit', () => {
    powerSaveBlocker.stop(blocker)
    setting.save();
  })

  app.on("activate", () => {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      createWindow();
    }
  });

  process.on('uncaughtException', (e) => {
    captureException(e);
    dialog.showErrorBox('异常', e.message)
    app.quit();
  });
}

