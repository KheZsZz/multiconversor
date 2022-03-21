
import React from 'react';
import { Text, View, Button, Pressable, } from 'react-native';
import { styles } from '../styles/main';

const HomeScreen = ({ navigation }:any) => {

    return (
      <View style={styles.containerHome}>

        <Text>Exercicios de PAM (programação e algoritmo mobile)</Text>

        <Pressable style={styles.buttons} onPress={()=>{navigation.navigate('KmhToMilhash')}}>
          <Text style={styles.textButton}>Km/h To Milhas/h</Text>
        </Pressable>

        <Pressable style={styles.buttons} onPress={()=>{navigation.navigate('KmToMetros')}}>
          <Text style={styles.textButton}>Km To Metros</Text>
        </Pressable>

        <Pressable style={styles.buttons} onPress={()=>{navigation.navigate('RealToDolar')}}>
          <Text style={styles.textButton}>Real To Dolar</Text>
        </Pressable>

      </View>
    );
  }
  export default HomeScreen;