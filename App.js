import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native'
//os componetes são escritos em azul

const App = () => {

  return(
    //view é a div no código
    <View style={styles.content}> 
          <Text> A psicologia nunca poderá dizer a verdade sobre a loucura, pois é a loucura que detém a verdade da psicologia. </Text>
         <Image
          style = {styles.tinyLogo}
          source = {require('./src/img/MF.png')}   
         />     
    </View>
  );

}

const styles = StyleSheet.create({
  content:{
    flex:1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'green'}

})

export default App;