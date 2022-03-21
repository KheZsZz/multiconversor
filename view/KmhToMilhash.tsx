
import { SetStateAction, useState } from 'react';
import { Text, View, Button, TextInput, Pressable  } from 'react-native';
import { styles } from '../styles/main';

const KmhToMilhash = () => {

    const [km, setKm] = useState(0);
    const[milha, setMilhas] = useState(0.621371);

    const coverter = () => {
      setMilhas((km * 0.621371));
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Km/h per Milhas/h</Text>
        <Text></Text>
        <TextInput
          keyboardType='numeric'
          style={styles.inputText}
          placeholder="Digite os Km/h"
          onChangeText={(quilometros)=>{setKm(Number(quilometros))}}
        />
        <Pressable style={styles.buttons} onPress={coverter}>
          <Text style={styles.textButton}> Converter</Text>
        </Pressable>
        <View style={styles.containerHome}>
          <Text style={styles.title}>{ milha.toFixed(4) } mp/h </Text>
        </View>
      </View>
    );
}
export default KmhToMilhash;