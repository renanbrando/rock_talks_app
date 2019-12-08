import React from 'react';
import { Text, Button } from 'react-native';
import { Container, Content, Header, Left, Icon } from 'native-base';
import TalksList from './TalksList';
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
    const navigate = (screen, data) => {
      this.props.navigation.navigate(screen, data);
    }

    let cards;
    if (this.state.list.length > 0) {
      cards = <TalksList list={this.state.list} navigate={navigate} />
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
