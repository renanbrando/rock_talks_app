import React from 'react';
import { Text, Button } from 'react-native';
import { Container, Header, Left, Icon, Content } from 'native-base';
import * as appConstants from '../constants/appConstants';

export class RegistrationsScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
          </Left>
        </Header>
        <Content>
          <Text>Details Screen</Text>
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
        </Content>
      </Container>
    )
  }
}

export default RegistrationsScreen;
