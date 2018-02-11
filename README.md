# After

<p align="center" >
    <img alt="react-native-gifted-chat" src="https://media.giphy.com/media/3o7WIq8RMAQB92cUSI/giphy.gif" width="480" height="484" />
</p>

# Before

<p align="center" >
    <img alt="react-native-gifted-chat" src="https://media.giphy.com/media/l4pT7TwVEaawBxBzG/giphy.gif" width="480" height="484" />
</p>



# react-native-root-view-background

Library is working on IOS and Android.

## Getting started

`$ npm install react-native-root-view-background --save`

`$ yarn add react-native-root-view-background`

### Mostly automatic installation

`$ react-native link react-native-root-view-background`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-root-view-background` and add `RNRootViewBackground.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNRootViewBackground.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNRootViewBackgroundPackage;` to the imports at the top of the file
  - Add `new RNRootViewBackgroundPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-root-view-background'
  	project(':react-native-root-view-background').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-root-view-background/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-root-view-background')
  	```


## Usage
```javascript
import { setRootViewBackgroundColor } from 'react-native-root-view-background';

export default class Main extends Component {
    componentDidMount(){
        setRootViewBackgroundColor('#ccc');
    }
}
```
  