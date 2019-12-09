import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
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
    });
  }

  render() {
    let cards;
    if (this.state.list.length > 0) {
      cards = <TalksList list={this.state.list} navigation={this.props.navigation} />
    } else {
      cards = (<View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>)
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})

