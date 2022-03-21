
import { SetStateAction, useState } from 'react';
import { Text, View, Button, TextInput  } from 'react-native';
import { styles } from '../styles/main';

const KmhToMilhash = () => {

  const [km, setKm] = useState(0);

    return (
      <View style={styles.container}>
        <Button title='Km/h To Milhas/h Screen' onPress={()=>{}}/>
        <TextInput onChange={(e)=>{setKm(e.target.value)}} />
        <Text>{ km.toString }</Text>
      </View>
    );
}
export default KmhToMilhash;