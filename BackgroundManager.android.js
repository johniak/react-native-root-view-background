import { NativeModules } from 'react-native';


function setRootViewBackgroundColor(hex) {
    if (hex.length === 4) {
        hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
    }
    NativeModules.RNRootViewBackground.setBackground(hex);
}


export { setRootViewBackgroundColor };
