import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ImageItem } from '../../Components/ImageItem';
import Title from '../../Components/Title';





const UserScreen = () => {





    //renderiza el item de las imagenes de los libros que fue comprando el usuario
    const renderItem = ({ item, styles }) => {
        <ImageItem item={item} styles={styles} />
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={require("../../../assets/img/profilePicLisa.jpg")} style={styles.image} resizeMode="center"></Image>
                    </View>
                    <View style={styles.active}></View>
                    <View style={styles.add}>
                        <TouchableOpacity>
                            <Ionicons name="camera-outline" size={25} color="#DFD8C8" style={{ marginTop: 0, marginLeft: 2 }}></Ionicons>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Lisa</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>4</Text>
                        <Text style={[styles.text, styles.subText]}>Compras</Text>
                    </View>

                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>16</Text>
                        <Text style={[styles.text, styles.subText]}>Libros</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>$15,844</Text>
                        <Text style={[styles.text, styles.subText]}>Total</Text>
                    </View>
                </View>

                <View style={{ marginTop: 32 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {/* Crear un flatlist con el imageItem*/}
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../../../assets/img/closeBook1.png")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../../../assets/img/closeBook1.png")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../../../assets/img/closeBook1.png")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../../../assets/img/closeBook1.png")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={require("../../../assets/img/closeBook1.png")} style={styles.image} resizeMode="cover"></Image>
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.datosPersonales}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginBottom: 30 }} >
                            <View style={styles.editDatos}>
                                <Title title='Datos Cuenta' style={[styles.text, { fontWeight: "200", fontSize: 30, paddingBottom: 10 }]} />
                                <TouchableOpacity>
                                    <Ionicons name="create-outline" size={25} color="#DFD8C8" style={{ marginTop: 25, marginLeft: 0 }}></Ionicons>
                                </TouchableOpacity>
                            </View>
                            {/* Crear flatlist */}
                            <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Usuario: Lisa2022</Text>
                            <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Email: Lisa2022@mail.com</Text>
                        </View>
                        <View>
                            <View style={styles.editDatos}>
                                <Title title='Datos Personales' style={[styles.text, { fontWeight: "200", fontSize: 30, paddingBottom: 10 }]} />
                                <TouchableOpacity>
                                    <Ionicons name="create-outline" size={25} color="#DFD8C8" style={{ marginTop: 25, marginLeft: 0 }}></Ionicons>
                                </TouchableOpacity>
                            </View>
                            {/* Crear flatlist */}
                            <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Nombre completo: Lisa Simpson</Text>
                            <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Domicilio: Avenida Evergreen 742, CABA. CP 1407</Text>
                            <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Documento: 11.222.333</Text>
                            <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Teléfono Principal: 123456789</Text>
                            <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Teléfono Alternativo: 123456789</Text>
                        </View>
                    </ScrollView>
                </View>



            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        marginBottom: 30,

    },
    text: {
        fontFamily: 'CormorantSCBold',
        color: "#52575D",
        backgroundColor: '#ffff'
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },

    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
        marginTop: 10,
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    datosPersonales: {
        alignSelf: 'center',
        marginTop: 16,
        marginBottom: 30,
        paddingBottom: 30
    },
    datosCuenta: {
        alignSelf: 'center',
        marginTop: 16,

    },
    editDatos: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    }


});
export default UserScreen