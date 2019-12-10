import React from 'react';
import { Button, ActivityIndicator } from 'react-native';
import { Container, Header, Left, Icon, Content, Right } from 'native-base';
import axios from 'axios';
import RegistrationList from './RegistrationList';

export class RegistrationsScreen extends React.Component {

  state = {
    list: []
  }

  componentDidMount () {
    axios.get('https://rock-talks-api.herokuapp.com/registration/find/email/reebrando@gmail.com').then((response) => {
      this.setState({
        list: response.data
      });
    })
  }

  render() {
    let details;
    if (this.state.list.length > 0) {
      details = <RegistrationList list={this.state.list} navigation={this.props.navigation} />
    } else {
      details = <ActivityIndicator size="large" color="#0000ff" />
    }
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
          </Left>
          <Right />
        </Header>
        <Content style={{padding: 16}}>
          { details }
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
