/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Test from './src/Screens/Test/Test';

import Statistics1 from './src/Screens/Common/Statistics/Mobile/Statistics1';
import AgainstPar from './src/Screens/Striker/Dashboard/Dashboard/AgainstPar';
import TrackmanComponent from './src/Screens/Striker/Dashboard/Dashboard/Trackman/TrackmanComponent';

AppRegistry.registerComponent(appName, () => App);
