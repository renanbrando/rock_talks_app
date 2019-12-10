import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Container, Content, Header, Left, Right, Icon, Button, ActionSheet } from 'native-base';
import TalksList from './TalksList';
import axios from 'axios';

var BUTTONS = [
  { text: "Gestão de Pessoas", icon: "people", iconColor: "#2c8ef4", id: "5dee65294faee13880c5d37a" },
  { text: "Tecnologia", icon: "code-working", iconColor: "#f42ced", id: "5dee65794faee13880c5d37b" },
  { text: "Empreendedorismo", icon: "briefcase", iconColor: "#ea943b", id: "5dee65844faee13880c5d37c" },
  { text: "Cultura Maker", icon: "logo-codepen", iconColor: "#ea943b", id: "5dee65944faee13880c5d37d" },
  { text: "Resetar Filtros", icon: "trash", iconColor: "#fa213b", id: null },
  { text: "Cancelar", icon: "close-circle", iconColor: "#fa213b", id: null }
];

var DESTRUCTIVE_INDEX = 4;
var CANCEL_INDEX = 5;

export class HomeScreen extends React.Component {
  state = {
    list: [],
    filteredList: [],
    categories: []
  }

  componentDidMount() {
    axios.all([
      axios.get('https://rock-talks-api.herokuapp.com/category/find'),
      axios.get('https://rock-talks-api.herokuapp.com/talk/find')
      ]).then(axios.spread((categories, talks) => {
        const data = parseList(talks.data, categories.data);
        this.setState({
          list: data,
          filteredList: data,
          cateogies: categories.data
        });
    }))
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
                      this.setState({ filteredList: filterList(this.state.list, BUTTONS[buttonIndex].id) });
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

const parseList = (list, categories) => {
  let parsedList = [...categories]
  parsedList.map((category) => {
    category.talks = []
    for (const item of list) {
      if (item.category._id == category._id) {
        category.talks.push(item)
      }
    }
  })

  return parsedList
}

const filterList = (list, cod) => {
  if (cod)
    return list.filter(item => item._id == cod)
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

