import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding:20,
      // justifyContent: 'center',
    },

    containerHome: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding:20,
      justifyContent: 'center',
    },

    title:{
      fontSize:20,
      textAlign:'center',
      fontWeight:'bold',
      width:'80%',
    },

    buttons: {
      width:'90%',
      height:'auto',
      borderRadius:10,
      padding:10,
      margin:10,
      backgroundColor:'#1E90FF',
      color:'#fff'
    },

    textButton:{
      color:'#000', 
      textAlign:'center'
    },

    inputText:{
      width:'90%',
      height:'auto',
      paddingBottom:5,
      paddingTop:5,
      paddingRight:10,
      paddingLeft:10,
      borderStyle:'solid',
      borderWidth:1,
      borderRadius:10,
      margin:10,
    },
  });