"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var setting = __importStar(require("./setting"));
var os = __importStar(require("os"));
var resizeTimeout;
function init(mainWindow) {
    if (os.platform() === 'win32') {
        var _a = mainWindow.getContentSize(), width_1 = _a[0], height_1 = _a[1];
        mainWindow.on('resize', function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function () {
                var _a = mainWindow.getContentSize(), currentWidth = _a[0], currentHeight = _a[1];
                var widthD = Math.abs(currentWidth - width_1);
                var heightD = Math.abs(currentHeight - height_1);
                if ((!widthD && !heightD))
                    return;
                if ((currentWidth / currentHeight).toFixed(2) == (16 / 9).toFixed(2))
                    return;
                if (widthD > heightD * 16 / 9) {
                    var h = Math.floor(currentWidth * 9 / 16);
                    mainWindow.setContentSize(currentWidth, h);
                    width_1 = currentWidth;
                    height_1 = h;
                }
                else {
                    var w = Math.floor(currentHeight * 16 / 9);
                    mainWindow.setContentSize(w, currentHeight);
                    width_1 = w;
                    height_1 = currentHeight;
                }
                setting.set({ displayHeight: height_1, displayWidth: width_1, resize: true });
            }, 300);
        });
    }
    else if (os.platform() === 'darwin') {
        mainWindow.setAspectRatio(16 / 9, { width: 0, height: 0 });
    }
}
exports.init = init;
//# sourceMappingURL=resize.js.map