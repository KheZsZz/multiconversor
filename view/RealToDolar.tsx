
import { useEffect, useState } from 'react';
import { Text, View, Button, TextInput, Pressable } from 'react-native';
import { styles } from '../styles/main';

type Dolar = {
  USDBRL: {
    code:string,
    codein:string,
    name:string,
    high:string,
    low:string,
    varBid:string,
    pctChange:string,
    bid:string,
    ask:string,
    timestamp:string,
    create_date:string,
  };
}


const RealToDolar = () => {
  const [loadding, setLoadding] = useState(true)
  const [valorDolar, setValorDolar] = useState<Dolar>();
  const [valorBRL, setValorBRL] = useState('');
  const [valor_conv, setValorConv] = useState<number>()

  const calcular = () => {
    setValorConv(Number(valorDolar?.USDBRL.bid) * Number(valorBRL));
  }

  useEffect(()=>{
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL', {
      method:"GET",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then((res) => {
     return res.json();
    })
    .then((data) => {
      setValorDolar(data);
    })
    .catch((error)=>{
      console.error(error)
      setLoadding(true);
    })
    .finally(()=>{setLoadding(false)});
  }, [setValorDolar, setLoadding])
  
    if(loadding == true){
      return(
        <View style={styles.containerHome}>
          <Text style={styles.title}>Loadding...</Text>
        </View>
      )
    } else {
      
      
      return (
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>{valorDolar?.USDBRL.name}</Text>
            <Text style={styles.textButton}>Valor atual do dolar: US$ {parseFloat(String(valorDolar?.USDBRL.bid)).toFixed(2)}</Text>
          </View>
          
          <TextInput 
            style={styles.inputText}
            placeholder='Insira o valor em USD para converter'
            keyboardType='numeric'
            onChangeText={(valor)=>{setValorBRL(valor)}}
          />

          <Pressable style={styles.buttons} onPress={calcular}>
            <Text style={styles.textButton}>calcular</Text>
          </Pressable>
          <View>
            <Text> O valor em reais é: R$ {parseFloat(String(valor_conv)).toFixed(2)}</Text>
          </View>
        </View>
      );
    }
    
}
export default RealToDolar;