import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { Title, TextInput, Button } from 'react-native-paper';
import MaskInput, { Masks } from 'react-native-mask-input';


//NPM credit card

const PagosScreen = ({ navigation }) => {
    const [cNumber, onChangeCNumber] = useState('')
    const [cName, onChangeCName] = useState('Jorge Pérez')
    const [cExpDate, onChangeCExpDate] = useState('----')
    const [cvc, onChangeCCvc] = useState('222')
    const [cardType, onChangecardType] = useState('VISA')


    //Campos de la tarjeta de credito
    const creditcardDateMask = [/\d/, /\d/, "/", /\d/, /\d/]
    const creditCardCVC = [[/\d/], [/\d/], [/\d/]]


    const onHandlerVolver = () => navigation.navigate('DireccionFacturacion')
    const onHandlerCheckout = () => navigation.navigate('FinalizarCompra')




    return (
        <ScrollView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Title>Información de Pago</Title>

                        <TextInput
                            label="Nombre Completo"
                            value={cName}
                            left={<TextInput.Icon name="account-outline" />}
                            style={styles.textInput}
                            onChangeText={onChangeCName}
                        />
                        <TextInput
                            label="Tipo de tarjeta"
                            value={cardType}
                            left={<TextInput.Icon name="credit-card" />}
                            style={styles.textInput}
                            onChangeText={onChangecardType}
                        />

                        <View style={[styles.textInput, styles.ccInput]}>
                            <Text variant="displaySmall">Número de tarjeta</Text>
                            <MaskInput
                                value={cNumber}
                                onChangeText={onChangeCNumber}
                                mask={Masks.CREDIT_CARD}
                            />
                        </View>

                        <View style={[styles.textInput, styles.dateCvc]}>
                            <View style={styles.ccInput}>
                                <Text variant="displaySmall">Fecha expiración</Text>
                                <MaskInput
                                    value={cExpDate}
                                    onChangeText={onChangeCExpDate}
                                    mask={creditcardDateMask}
                                />
                            </View>
                            <View style={styles.ccInput}>
                                <Text variant="displaySmall">Código de seguridad</Text>
                                <MaskInput
                                    value={cvc}
                                    showObfuscatedValue
                                    obfuscationCharacter="#"
                                    onChangeText={(obfuscated) => { onChangeCCvc(obfuscated) }}
                                    mask={creditCardCVC}
                                />
                            </View>
                        </View>



                    </View>
                </TouchableWithoutFeedback>
                <View style={[styles.inner, styles.buttonsContainer]}>
                    <Button
                        onPress={onHandlerCheckout}
                        style={styles.button}
                        mode="outlined"
                    >
                        <Text>Finalizar Compra</Text>
                    </Button>

                    <Button
                        onPress={onHandlerVolver}
                        mode="outlined"
                        icon="arrow-left"

                        style={styles.button}
                    >
                        <Text>Volver</Text>
                    </Button>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        width: 350,
        marginVertical: 20
    },
    textInput: {
        width: 300,
        margin: 10
    },
    ccInput: {
        backgroundColor: '#e6e6e6',
        borderBottomColor: '#999999',
        borderBottomWidth: 1,
        padding: 10
    },
    dateCvc: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    buttonsContainer: {

        padding: 0,
        marginBottom: 100,
        marginVertical: 0
    },
    button: {
        margin: 10,
        color: 'red'
    }

})

export default PagosScreen