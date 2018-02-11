import { NativeModules } from 'react-native';

function hexToRgb(hex) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = `0x${c.join('')}`;
        const red = parseFloat((c >> 16) & 255);
        const green = parseFloat((c >> 8) & 255);
        const blue = parseFloat(c & 255);
        return [red, green, blue];
    }
    throw new Error('Bad Hex');
}


function setRootViewBackgroundColor(hex) {
    const [r, g, b] = hexToRgb(hex);
    setRootViewBackgroundColorWithRGB(r, g, b, 1);
}

function setRootViewBackgroundColorWithRGB(r, g, b, a) {
    NativeModules.RNRootViewBackground.setBackground(r, g, b, a);
}

export { setRootViewBackgroundColor };
