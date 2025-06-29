import { globalShortcut } from 'electron';
import * as setting from './setting';

import { send } from './listener';


function init(): void {
    
    globalShortcut.register('Alt+Enter', () => {
        let currentFullscreen = setting.get('fullscreen');
        setting.set({ fullscreen: !currentFullscreen })
        send({ 'channel': 'setting', 'fullscreen': !currentFullscreen });
    })


}

export { init }