import { crashReporter } from 'electron';

function init(): void {
    crashReporter.start({
        productName: 'The',
        companyName: 'npcstudio',
        submitURL: 'https://203444996f76484988e29587a80e3e9d@report.url.cn/sentry/909',
        uploadToServer: true
    })
}

export {init}