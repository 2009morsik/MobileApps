import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Image} from 'react-native';
import {useRouter} from "expo-router";
import {Picker} from "@react-native-picker/picker"

const ConvertersScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => router.back()} style={styles.buttonExit}>
                <Text style={styles.text}>←</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, {backgroundColor: "#ff9f0a"}]}
                onPress={() => router.push('/convLengthComponent')}>
                <Image source={require('../assets/images/school.png') } style={styles.picture}></Image>
            </TouchableOpacity>
        </SafeAreaView>
    )


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    button: {
        backgroundColor: "white",
        height:115,
        width:115,
        borderRadius: 30,
        justifyContent:'center'


    },
    buttonText: {
        fontSize: 35,
    },
    buttonExit: {
        fontSize: 24,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderRadius: 45,
    },
    text: {
        color: "white",
        fontSize: 35,
    },
    picture:{
        width: 90,
        height: 90,
        margin: 10
    }
})
export default ConvertersScreen;