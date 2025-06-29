import greenworks = require("greenworks");
import { send } from './listener';

import * as os from "os";
import * as fs from "fs";
import * as path from "path";
import * as https from 'https';
import { parse } from 'url';
import { mkdirP } from "./mkdir"
import { BrowserWindow, shell } from "electron";


const p: any = process;

function init(): boolean {
    p.activateUvLoop()
    return greenworks.init();
}

function initAPI(): boolean {
    return greenworks.initAPI();
}

function getSteamId(): string {
    return greenworks.getSteamId().steamId;
}

function getSteamTicket(): Promise<any> {
    return new Promise((resolve) => {
        greenworks.getAuthSessionTicket((data: any) => {
            resolve({ ret: 0, code: 0, ticket: data.ticket.toString('hex') })
        }, function (err: any) {
            console.error(err)
            resolve({ ret: -1, code: -1 })
        })
    })
}

function getSteamEncry(): Promise<any> {
    return new Promise((resolve) => {
        greenworks.getEncryptedAppTicket('NPCStudio', (ticket: any) => {
            resolve({ ret: 0, code: 0, ticket: ticket.toString('hex') })
        }, (err: string) => {
            console.error(err)
            resolve({ ret: -1, code: -1, msg: err })
        });
    })
}

function steamRunning(): boolean {
    return greenworks.isSteamRunning()
}

function launchSteam(appid: number): void {
    let result = greenworks.restartAppIfNecessary(appid)
}

function isOverlayEnabled(): boolean {
    return greenworks.isGameOverlayEnabled()
}

function activeOverlay(type: string): void {
    greenworks.activateGameOverlay(type)
}

function getSteamUser(steamid: string = getSteamId()): any {
    greenworks.requestUserInformation(steamid, true)
}

function getSteamAppid(): number {
    return greenworks.getAppId()
}

function addListener() {
    greenworks.on('micro-txn-authorization-response', (appid: number, orderid: string, authorized: boolean) => {
        send({ 'channel': 'micropay', 'appid': appid, 'orderid': orderid, 'authorized': authorized });
    })

    greenworks.on('dlc-installed', (appid: number) => {
        send({ 'channel': 'dlcInstall', 'appid': appid })
    })
}

function checkDLC(id: number): boolean {
    if (!id) return false
    return greenworks.isDLCInstalled(id);
}

function saveFile(url: string): Promise<boolean> {
    return new Promise((resolve) => {
        let parsed = parse(url);
        let dir = path.join(os.homedir(), 'Desktop', 'TheInvisibleGuardian/');

        if (!fs.existsSync(dir)) {
            mkdirP.sync(dir)
        }

        let fileName = path.basename(parsed.pathname);
        let dest = path.resolve(dir, fileName);
        let file = fs.createWriteStream(dest);

        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                resolve(true)
            });
        }).on('error', (err) => {
            file.destroy()
            fs.unlinkSync(dest);
            resolve(false)
        });

    })
}

function activateAchievement(name: string): Promise<boolean> {
    return new Promise((resolve) => {
        greenworks.activateAchievement(name, () => {
            resolve(true)
        }, () => {
            resolve(false)
        })
    })
}

function clearAchievement(name: string): Promise<boolean> {
    return new Promise((resolve) => {
        greenworks.clearAchievement(name, () => {
            resolve(true)
        }, () => {
            resolve(false)
        })
    })
}

function getAchievement(name: string): Promise<boolean> {
    return new Promise((resolve) => {
        greenworks.getAchievement(name, (result: boolean) => {
            resolve(result)
        })
    })
}

function toStore(url: string): boolean {
    if (os.platform() === 'win32') {
        greenworks.activateGameOverlayToWebPage(url)
        return true
    } else if (os.platform() === 'darwin') {
        shell.openExternal(url)
        return true
    }

}

export {
    init,
    initAPI,
    isOverlayEnabled,
    activeOverlay,
    getSteamId,
    getSteamTicket,
    getSteamEncry,
    steamRunning,
    launchSteam,
    addListener,
    checkDLC,
    saveFile,
    toStore,
    getSteamAppid,
    activateAchievement,
    getAchievement,
    clearAchievement
}