import { app,screen } from "electron";
import * as store from './store';
import * as os from "os";

const system = {
    uptime: os.uptime(),
    platform: os.platform(),
    hostname: os.hostname(),
    release: os.release(),
    type: os.type(),
    arch: os.arch(),
    eol: os.EOL, // 换行符
    endianness: os.endianness(), // 字节次序
    loadavg: os.loadavg(), // 平均负载
    network: os.networkInterfaces() // 网络
};

const memory = {
    freemem: os.freemem(),
    totalmem: os.totalmem()
};

const cpus = os.cpus();


function getInfo():any {
    let mainScreen = screen.getPrimaryDisplay();
    let screenSize = mainScreen.size;
    let G = 1024 * 1024 * 1024;

    let systemInfo = {
        type: `${os.type()} ${os.release()} ${os.arch()}`,
        totalmem: `${(memory.totalmem / G).toFixed(2)}G`,
        freemem: `${(memory.freemem / G).toFixed(2)}G`,
        cpu: `${cpus[0].model}-${cpus.length}Cores`
    }

    let info = {
        screen: screenSize,
        system: systemInfo,
        platform: os.platform(),
        custom: store.get(),
        app: {
            path: app.getAppPath()
        }
    };

    return info
}

export { getInfo}