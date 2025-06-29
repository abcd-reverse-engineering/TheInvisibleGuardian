"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
function init() {
    electron_1.crashReporter.start({
        productName: 'The',
        companyName: 'npcstudio',
        submitURL: 'https://203444996f76484988e29587a80e3e9d@report.url.cn/sentry/909',
        uploadToServer: true
    });
}
exports.init = init;
//# sourceMappingURL=crash.js.map