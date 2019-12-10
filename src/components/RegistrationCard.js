import React from 'react';
import { Text, Button, Image } from 'react-native';
import { Card, CardItem, Left, Right, Body, Thumbnail } from 'native-base';
import * as appConstants from '../constants/appConstants';

const RegistrationCard = (props) => {
  const { _id, imageUrl, title, speaker, date, places } = props.talk;
  return (
    <Card>
      <CardItem>
        <Left>
          <Image source={loadImage(imageUrl)} />
          <Body>
            <Text>Nome: {title}</Text>
            <Text note>Palestrante: {speaker}</Text>
            <Text note>Data: {new Date(date).toLocaleString()}</Text>
            <Text note>Vagas: {places ? places : 'Esgotado'}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  )
}

export default RegistrationCard;

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