import React from 'react';
import { Text, Button } from 'react-native';
import { Card, CardItem, Left, Right, Thumbnail, Body } from 'native-base';
import * as appConstants from '../constants/appConstants';

const TalkCard = (props) => {
  const { Imagem, Titulo, Palestrante, Data, Hora, QtdVagasDisponiveis } = props.palestra;
  return (
    <Card>
      <CardItem>
        <Left>
          <Thumbnail />
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