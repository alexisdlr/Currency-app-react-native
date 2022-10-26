import React, { useState } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import StyledText from './StyledText'
import {Picker} from '@react-native-picker/picker';

function Main() {

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [number, onChangeNumber] = useState(null);
  const [number2, onChangeNumber2] = useState(null);
  const [result, setResult] = useState(null);

  const convert = (selectedLanguage) => {
      if(selectedLanguage === 'PD' || selectedLanguage === 'PE') {
        setResult(parseInt(number2) / parseInt(number) )  
        return
      }
      return setResult(parseInt(number2) * parseInt(number) )    
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <StyledText primary bold size={'lg'} align={'center'} >Cambio de divisas.</StyledText>
        <StyledText secondary size={'md'} >Selecciona tu tipo de cambio e ingresa las cantidades correspondientes!.</StyledText>
      </View>
      <View style={styles.containerDivisas}>
        <View style={styles.containerCambio}>
          <StyledText primary bold size={'md'}> Tipo de cambio:</StyledText>
          <TextInput 
            style={styles.Input}
            onChangeText={onChangeNumber}
            value={number}
            keyboardType='numeric'
            />
        </View>
        <View style={styles.containerCambio}>
          <StyledText primary bold size={'md'} > Cantidad:</StyledText>
          <TextInput 
            style={styles.Input}
            onChangeText={onChangeNumber2}
            value={number2}
            keyboardType='numeric'

            />
        </View>
        <View style={styles.containerCambio}>
        {/* picher */}
          <View >
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedLanguage(itemValue)
                } 
              }
                style={styles.picker}
              >
              <Picker.Item label="Dolares a Pesos" value="DP" />
              <Picker.Item label="Pesos a Dolares" value="PD" />
              <Picker.Item label="Euros a Pesos" value="EP" />
              <Picker.Item label="Pesos a Euros" value="PE" />
            </Picker>
          </View>
        </View>
        {/* button */}
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {convert(selectedLanguage)}}
        >
          <StyledText bold align={'center'}>
            Convertir
          </StyledText>
        </TouchableOpacity>
        <View style={{alignSelf: 'center', marginTop: 15}} >
            {
              result ? <StyledText align='center' bold size={'md'} primary>Resultado: ${result}</StyledText>: <StyledText size={'md'} secondary bold align={'center'}>No hay resultado.</StyledText>
            }
        </View>
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: 'linear-gradient(18deg, rgba(0,1,20,1) 28%, rgba(0,1,1,.5) 65%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCambio: {
    flexDirection:'row', 
    alignItems:'center',
  },
  containerDivisas: {
    flex: 2,
    padding: 18,
    alignItems: 'flex-start',
  },
  Input: {
    padding: 10,
    height: 40,
    width: 120, 
    margin: 12,
    borderColor:'#fff',
    borderWidth: 1,
    borderRadius: 4,
    color: '#fff'
  },
  containerText: {
    flex: 1,
    marginTop: 50
  },
  Button: {
    backgroundColor: '#C7F2A4',
    padding: 15,
    marginTop: 15,
    borderRadius: 4,
    width: 300,
  },
  picker: {
    width: 200, 
    backgroundColor: 'rgba(255,255,255,.8)', 
    marginTop: 12, 
    borderBottomWidth: 4,
    
  },
  result: {
    fontSize: 30, 
    marginVertical: 15,
    color: '#fff'
  },
  resultOp: {
    color: '#C7F2A4'
  }
});

export default Main