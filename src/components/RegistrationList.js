import React from 'react';
import { View, Text } from 'react-native';
import RegistrationCard from './RegistrationCard';

const RegistrationList = (props) => {
	let list = props.list;
  return (
    <View>
			{
				list.map((item, index) => (
					<View key={index}>
						<RegistrationCard talk={item} navigation={props.navigation}/>
					</View>
				))
			}
    </View>
  )
}

export default RegistrationList;