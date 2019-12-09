import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Container, Content, Header, Left, Right, Icon, Button, ActionSheet } from 'native-base';
import TalksList from './TalksList';
import axios from 'axios';

var BUTTONS = [
  { text: "Gestão de Pessoas", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Tecnologia", icon: "analytics", iconColor: "#f42ced" },
  { text: "Empreendedorismo", icon: "aperture", iconColor: "#ea943b" },
  { text: "Cultura Maker", icon: "aperture", iconColor: "#ea943b" },
  { text: "Resetar Filtros", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancelar", icon: "close", iconColor: "#25de5b" }
];

var DESTRUCTIVE_INDEX = 4;
var CANCEL_INDEX = 5;

export class HomeScreen extends React.Component {
  state = {
    list: [],
    filteredList: []
  }

  componentDidMount() {
    axios.get('https://5dec46afd444dd001422a785.mockapi.io/talks').then(response => {
      this.setState({
        list: response.data,
        filteredList: response.data
      });
    });
  }

  render() {
    let cards;
    if (this.state.filteredList.length > 0) {
      cards = <TalksList list={this.state.filteredList} navigation={this.props.navigation} />
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
          <Right>
            <Button transparent
              onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: "Filtrar"
                  },
                  buttonIndex => {
                    if (buttonIndex != 5){
                      this.setState({ clicked: BUTTONS[buttonIndex] });
                      this.setState({ filteredList: filterList(this.state.list, buttonIndex) });
                    }
                  }
                )}
            >
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <Content style={{paddingHorizontal: 16}} > 
          { cards }
        </Content>
      </Container>
    );
  }
}

const filterList = (list, cod) => {
  if (cod != 4)
    return list.filter(item => item.Codigo == cod + 1)
  else 
    return list
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

