import { BrowserWindow, app } from "electron";
import * as store from './store';
import {getInfo} from './system';


function save():void{
    store.save()
}

function get(key?: string ): any {
    return store.get(key)
}

function set(data: any) {
    let mainWindow = BrowserWindow.getFocusedWindow();
    if(!mainWindow) return
    let system = getInfo();
    let setting = Object.assign(store.get(), data)
    if (setting.fullscreen !== mainWindow.isFullScreen()) {
        mainWindow.setFullScreen(setting.fullscreen)
    }


    if(data.hasOwnProperty('fullscreen') && !data.fullscreen && !data.resize){
        let height = Math.floor(system.screen.height * 0.7);
        let width = Math.floor(height * 16/9);
        mainWindow.setContentSize(width,height);
        mainWindow.center();
    }


    store.set(setting)

    if(mainWindow.isFullScreen() !== setting.fullscreen){
        app.relaunch();
        app.quit()
    }
}


export { save, get, set }