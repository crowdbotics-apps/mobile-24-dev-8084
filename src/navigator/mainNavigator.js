import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen19334Navigator from '../features/BlankScreen19334/navigator';
import BlankScreen29333Navigator from '../features/BlankScreen29333/navigator';
import BlankScreen39332Navigator from '../features/BlankScreen39332/navigator';
import BlankScreen49331Navigator from '../features/BlankScreen49331/navigator';
import CopyOfBlankScreen19330Navigator from '../features/CopyOfBlankScreen19330/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen19334: { screen: BlankScreen19334Navigator },
BlankScreen29333: { screen: BlankScreen29333Navigator },
BlankScreen39332: { screen: BlankScreen39332Navigator },
BlankScreen49331: { screen: BlankScreen49331Navigator },
CopyOfBlankScreen19330: { screen: CopyOfBlankScreen19330Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
