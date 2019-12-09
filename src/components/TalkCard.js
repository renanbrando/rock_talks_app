import React from 'react';
import { Text, Button, Image } from 'react-native';
import { Card, CardItem, Left, Right, Body, Thumbnail } from 'native-base';
import * as appConstants from '../constants/appConstants';

const TalkCard = (props) => {
  const { Imagem, Titulo, Palestrante, Data, Hora, QtdVagasDisponiveis } = props.palestra;
  return (
    <Card>
      <CardItem>
        <Left>
          <Image source={loadImage(Imagem)} />
          <Body>
            <Text>Nome: {Titulo}</Text>
            <Text note>Palestrante: {Palestrante}</Text>
            <Text note>Data: {Data} {Hora}</Text>
            <Text note>Vagas: {QtdVagasDisponiveis ? QtdVagasDisponiveis : 'Esgotado'}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem>
        <Right>
          <Button title='Ver mais' onPress={() => {
              props.navigation.navigate(appConstants.SCREEN.DETAILS, {palestra: props.palestra})
              }
            } />
        </Right>
      </CardItem>
    </Card>
  )
}

export default TalkCard;

const loadImage = (img) => {
  switch (img) {
    case '1.jpg':
      return require('../assets/images/1.jpg')
    case '2.jpg':
      return require('../assets/images/2.jpg')
    case '3.jpg':
      return require('../assets/images/3.jpg')
    case '4.jpg':
      return require('../assets/images/4.jpg')
    case '5.jpg':
      return require('../assets/images/5.jpg')
    default:
      return require('../assets/images/1.jpg')
  }
}