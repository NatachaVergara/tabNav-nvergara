import React, { useState } from 'react'
import { Alert, Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Card from '../Components/Card'
import Input from '../Components/Input'
import TextLAbel from '../Components/TextLabel'
import Title from '../Components/Title'
import Colors from '../Constants/Colors'
const Login = ({ navigation }) => {

  const [email, onChangeEmail] = useState('')
  const [password, onChangePassword] = useState('')

  const handleLogin = () => {

    if (email === '' || password === '') {
      Alert.alert('No deje campos vacios')
      return
    }


    setTimeout(() => {
      navigation.navigate('ShopTab')     
    }, 3000)


  }


  return (
    <SafeAreaView style={styles.container} >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Title
          title={'Login'}
          style={styles.title}
        />
        {/* <Text style={styles.title}>Login</Text> */}
        <Card style={styles.card}>
          <Text style={styles.label}>Email</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            value={email}
            onChangeText={onChangeEmail}
          />
          <Text style={styles.label}>Contraseña</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            keyboardType='default'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={onChangePassword}
          />
          <Button title='Entrar' color={Colors.secondary} onPress={handleLogin} />
        </Card>
        <TextLAbel
          text={'No tengo cuenta'}
          change={() => { navigation.navigate('Register') }}
          onReturn={() => { navigation.navigate('Inicio') }}
        />

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  title: {
    marginTop: 50,
    marginLeft: 90
  },

  card: {
    marginTop: '20%',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '8%'
  },
  label: {
    color: Colors.text,
    margin: 10,
    fontFamily: 'light'
  },
  input: {
    width: 200,
    textAlign: 'center',
    fontSize: 15,

  },
  labelRegister: {
    marginTop: 20,
  },
  volver: {
    fontSize: 20,

  },
  button: {
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
    width: 100
  }


})

export default Login