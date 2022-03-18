
import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../styles/main';

const HomeScreen = ({ navigation }:any) => {

    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
        <br/>
        <Text>Exercicios de PAM (programação e algoritmo mobile)</Text>
        <br/>
        <Button
          title="Km to Metros"
          onPress={() => navigation.navigate('KmToMetros')}
        />
        <br/>
        <Button
          title="Km/H to Milhas/H"
          onPress={() => navigation.navigate('KmhToMilhash')}
        />
        <br/>
        <Button
          title="Real to Dolar $$$"
          onPress={() => navigation.navigate('RealToDolar')}
        />
      </View>
    );
  }
  export default HomeScreen;