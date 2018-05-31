import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
// import App from './App';

// import App from './Component/heightWidth';
//import App from './Component/print2';
import Main from './networking/Main';
import SplashScreen from './networking/SplashCreen';

const App = StackNavigator({
  SplashScreen: {
    screen: SplashScreen
  },
  Main: {
    screen: Main
  }
});

AppRegistry.registerComponent('FirstProject', () => App);
