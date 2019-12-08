import React from 'react';
import { View, Text, Button } from 'react-native';
import { Header, Left, Icon } from 'native-base';
import * as appConstants from '../constants/appConstants';

export class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.data = this.props.navigation.getParam('data');
    this.palestra = this.props.navigation.getParam('palestra');
  }
  render() {
    return (
      <View>
        <Header>
          <Left>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
          </Left>
        </Header>
        <View>
          <Text>Details Screen</Text>
          <Text>Data: {this.palestra}</Text>
          <Button
            title="Go to Home"
            onPress={() =>
              this.props.navigation.navigate(appConstants.SCREEN.HOME)
            }
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}
