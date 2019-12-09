import React from 'react';
import { SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { HomeScreen, RegistrationsScreen, DetailsScreen } from './src/components';
import { Root } from 'native-base';

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
  Registrations: RegistrationsScreen,
}
);

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex: 1}}>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

export default class App extends React.Component {
  render() {
    const AppContainer = createAppContainer(AppDrawerNavigator);
    return (
      <Root>
        <AppContainer />
      </Root>
    )
  }
}
