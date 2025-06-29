import { app, ipcMain, BrowserWindow,dialog} from "electron";
import * as system from './system';
import * as  steam from './steam';
import * as setting from './setting';
import * as loudness from "loudness";



function setResponse(cmd: string, sn: number, data: any) {
    let response = {
        cmd: cmd,
        sn: sn,
        ret: 0,
        data: data
    }
    return JSON.stringify(response)
}

function send(data: any): void {
    let mainWindows = BrowserWindow.getAllWindows();
    mainWindows.forEach(mainWindow => {
        mainWindow.webContents.send('ipcRenderer-listener', JSON.stringify(data))
    })
}

async function init() {
    ipcMain.on('ipcMain-async-listener', async (event: any, arg: any) => {
        let response;
        try {
            response = JSON.parse(arg)
        } catch (e) {
            response = {}
        }

       
        let cmd: string = response.cmd;
        let sn: number = response.sn;

        switch (cmd) {
            case 'exitGame':
                app.exit();
                break;

            case 'relauchGame':
                app.relaunch();
                app.exit();
                break;

            case 'getSystemInfo': {
                let info = system.getInfo();
                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, info))
                break;
            }

            case 'getSteamId': {
                let id = steam.getSteamId();
                let appid = steam.getSteamAppid();
                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, {id:id,appid: appid}))
                break;
            }

            case 'getSteamTicket':{
                let ticket = await steam.getSteamTicket()
                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, {ticket: ticket}))
                break;
            }

            case 'getSteamInfo': {
                let steamTicket = await steam.getSteamEncry();
                if (steamTicket.ret === 0) {
                    let steamId = steam.getSteamId();
                    let appid = steam.getSteamAppid();
                    event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { encryid: steamTicket.ticket, steamId: steamId,appid: appid }))
                } else {
                    let msg = steamTicket.msg;
                    event.sender.send('ipcRenderer-async-listener', JSON.stringify({ ret: -1, cmd: cmd, sn: sn, msg: msg }))
                }
                break;
            }
            case 'updateSetting': {
                let data = response.data;
                setting.set(data)
                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { msg: 'ok' }))
                break;
            }
            case 'setVolume': {
                let volume = response.data;
                await loudness.setVolume(volume);
                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { msg: 'ok' }))
                break;
            }

            case 'saveFile': {
                let data = response.data;
                let url = data.url;
                let result = await steam.saveFile(url)
                if (result) {
                    event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { msg: 'ok' }))
                } else {
                    event.sender.send('ipcRenderer-async-listener', JSON.stringify({ ret: -1, cmd: cmd, sn: sn, msg: '保存失败' }))
                }
                break;
            }

            case 'activeOverlay': {
                let data = response.data;
                let type = data.type;
                steam.activeOverlay(type)
                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { msg: 'ok' }))
                break;
            }

            case 'getSteamAppid':{
                let appid = steam.getSteamAppid()
                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { appid: appid }))
                break;
            }


            case 'checkDLC': {
                let data = response.data;
                let appid = data.appid;
                let result = steam.checkDLC(parseInt(appid))
                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { result: result }))
                break;
            }

            case 'showError':{
                let data = response.data;
                let title = data.title;
                let msg = data.msg;
                dialog.showErrorBox(title,msg);
                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { msg: 'ok' }))
                break;
            }

            case 'toSteamStore':{
                let data = response.data;
                let url = data.url;
                let result = steam.toStore(url)
                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { result: result }))
                break;
            }

            case 'activateAchievement':{
                let data = response.data;
                let name = data.name;
                let result = await steam.activateAchievement(name)
                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { result: result }))
                break;
            }

            case 'clearAchievement':{
                let data = response.data;
                let name = data.name;
                let result = await steam.clearAchievement(name)
                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { result: result }))
                break;
            }


            case 'getAchievement':{
                let data = response.data;
                let name = data.name;
                let result = await steam.getAchievement(name)
                event.sender.send('ipcRenderer-async-listener', setResponse(cmd, sn, { result: result }))
                break;
            }

        }

    })
}

export { init, send }