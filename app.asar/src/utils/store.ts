const electron = require('electron');
import * as fs from "fs";
import * as path from "path";

const defaults = {
    "bgm": true,
    "displayWidth": 0,
    "displayHeight": 0,
    "fullscreen": true,
    "volume": 1,
    "effect": true
} 

const userDataPath = (electron.app || electron.remote.app).getPath('userData');
const settingPath = path.join(userDataPath, 'setting.json');
let data = parseDataFile(settingPath, defaults);

function get(key?:string){
    if(key){
        return data[key]
    }else{
        return data
    }
}

function set(key: any, val?: any) {
    if(!val && typeof key === 'object'){
        data = Object.assign(data,key)
    }else{
        data[key] = val;
    }
}

function save():void{
    fs.writeFileSync(settingPath, JSON.stringify(data));
}


function parseDataFile(filePath: string, defaults: any) {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
        return defaults;
    }
}



// expose the class
export {
    get,set,save
};