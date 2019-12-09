import React from 'react';
import { Text, Button } from 'react-native';
import { Header, Left, Icon, Container, Content } from 'native-base';
import * as appConstants from '../constants/appConstants';

export class DetailsScreen extends React.Component {

  render() {
    this.palestra = this.props.navigation.getParam('palestra');
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
          </Left>
        </Header>
        <Content style={{paddingHorizontal: 16}}>
          <Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginVertical: 16}}>Detalhe</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginVertical: 8 }}>{this.palestra.Titulo}</Text>
          <Text style={{fontSize: 14, marginVertical: 8 }}>Palestrante: {this.palestra.Palestrante}</Text>
          <Text style={{fontSize: 14, marginVertical: 8 }}>Data: {this.palestra.Data} {this.palestra.Hora}</Text>
          <Text style={{fontSize: 14, marginVertical: 8 }}>{this.palestra.Descricao}</Text>
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
