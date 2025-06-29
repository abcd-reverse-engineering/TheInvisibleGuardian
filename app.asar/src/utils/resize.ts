import * as setting from './setting';
import * as os from "os";

let resizeTimeout: any;


function init(mainWindow: Electron.BrowserWindow): void {
    if (os.platform() === 'win32') {
        let [width, height] = mainWindow.getContentSize();
        mainWindow.on('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function () {
                let [currentWidth, currentHeight] = mainWindow.getContentSize();
                let widthD = Math.abs(currentWidth - width);
                let heightD = Math.abs(currentHeight - height);
                if ((!widthD && !heightD)) return
                if ((currentWidth / currentHeight).toFixed(2) == (16 / 9).toFixed(2)) return

                if (widthD > heightD * 16 / 9) {
                    let h = Math.floor(currentWidth * 9 / 16)
                    mainWindow.setContentSize(currentWidth, h);
                    width = currentWidth;
                    height = h;
                } else {
                    let w = Math.floor(currentHeight * 16 / 9);
                    mainWindow.setContentSize(w, currentHeight);
                    width = w;
                    height = currentHeight;
                }

                setting.set({ displayHeight: height, displayWidth: width ,resize: true})

            }, 300);
        });
    } else if (os.platform() === 'darwin') {
        mainWindow.setAspectRatio(16 / 9, { width: 0, height: 0 })
    }
}




export {
    init
}