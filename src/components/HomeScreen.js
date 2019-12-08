import React from 'react';
import { Text, Button } from 'react-native';
import { Container, Content, Header, Left, Icon } from 'native-base';
import TalksList from './TalksList';
import * as appConstants from '../constants/appConstants';
import axios from 'axios';

export class HomeScreen extends React.Component {
  state = {
    list: []
  }

  componentDidMount() {
    axios.get('https://5dec46afd444dd001422a785.mockapi.io/talks').then(response => {
      this.setState({list: response.data});
      console.log(response.data);
    });
  }

  render() {
    let cards;
    if (this.state.list.length > 0) {
      cards = <TalksList list={this.state.list} />
    } else {
      cards = <Text>Sem Palestras</Text>;
    }
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
          </Left>
        </Header>
        <Content style={{paddingHorizontal: 16}} > 
          { cards }
        </Content>
      </Container>
    );
  }
}
