
import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../styles/main';

const HomeScreen = ({ navigation }:any) => {

    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>

        <Text>Exercicios de PAM (programação e algoritmo mobile)</Text>

        <Button
          title="Km to Metros"
          onPress={() => navigation.navigate('KmToMetros')}
        />

        <Button
          title="Km/H to Milhas/H"
          onPress={() => navigation.navigate('KmhToMilhash')}
        />

        <Button
          title="Real to Dolar $$$"
          onPress={() => navigation.navigate('RealToDolar')}
        />
      </View>
    );
  }
  export default HomeScreen;