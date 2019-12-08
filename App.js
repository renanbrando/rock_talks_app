import React from 'react';
import { SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { HomeScreen, DetailsScreen } from './src/components';

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
}, {
  contentComponent: CustomDrawerComponent
}
);

const AppContainer = createAppContainer(AppDrawerNavigator);

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
