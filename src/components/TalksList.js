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
						<Text style={{fontSize: 14, fontWeight: 'bold', marginVertical: 8}}>{item.description}</Text>
						{
							item.talks.map((p, i) => (
								<View key={i}>
									<TalkCard talk={p} navigation={props.navigation}/>
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