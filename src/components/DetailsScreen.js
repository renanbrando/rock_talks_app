import React from 'react';
import { Text, Button } from 'react-native';
import { Header, Left, Icon, Container, Content, Body, Right } from 'native-base';
import * as appConstants from '../constants/appConstants';

export class DetailsScreen extends React.Component {

  render() {
    this.talk = this.props.navigation.getParam('talk');
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
          </Left>
          <Body />
          <Right />
        </Header>
        <Content style={{paddingHorizontal: 16}}>
          <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginVertical: 16}}>Detalhe</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginVertical: 8 }}>{this.talk.title}</Text>
          <Text style={{fontSize: 14, marginVertical: 8 }}>Palestrante: {this.talk.speaker}</Text>
          <Text style={{fontSize: 14, marginVertical: 8 }}>Data: {new Date(this.talk.date).toLocaleString()}</Text>
          <Text style={{fontSize: 14, marginVertical: 8 }}>{this.talk.description}</Text>
          <Button
            title="Se inscrever"
            onPress={() =>
              this.props.navigation.navigate(appConstants.SCREEN.HOME)
            }
          />
          <Button
            title="Voltar"
            onPress={() => this.props.navigation.goBack()}
          />
        </Content>
      </Container>
    );
  }
}
