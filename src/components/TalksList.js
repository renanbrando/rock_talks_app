import React from 'react';
import { View, Text } from 'react-native';
import TalkCard from './TalkCard';

const TalksList = (props) => {
	let list = props.list;
  return (
    <View>
			{
				list.map((item, index) => (
					<View key={index}>
						<Text style={{fontSize: 14, fontWeight: 'bold', marginVertical: 8}}>{item.Descricao}</Text>
						{
							item.Palestras.map((p, i) => (
								<View key={i}>
									<TalkCard palestra={p} navigate={props.navigate}/>
								</View>
							))
						}
					</View>
				))
			}
    </View>
  )
}

export default TalksList;