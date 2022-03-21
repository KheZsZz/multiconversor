
import { useState } from 'react';
import { Text, View, Button, TextInput, Pressable } from 'react-native';
import { styles } from '../styles/main';

const KmToMetros = () => {

    const [km, setkm] = useState('');
    const [metros, setMetros] = useState(0);

    const converter = () => {
      setMetros((Number(km) * 1000));

    }



    return (
      <View style={styles.container}>
        <Text style={styles.title}>Quilometros para metros...</Text>
        <Text></Text>
        <TextInput
          keyboardType='numeric'
          style={styles.inputText}
          placeholder = "Insira os Km/h"
          onChangeText={(quilometragem)=>{setkm(quilometragem)}}
        />
        <Pressable style={styles.buttons} onPress={converter}>
          <Text style={styles.textButton}> Converter </Text>
        </Pressable>
        <View style={styles.containerHome}>
          <Text style={styles.title}>Metros:</Text>
          <Text style={styles.title}>{metros} </Text>
        </View>
      </View>
    );
}
export default KmToMetros;