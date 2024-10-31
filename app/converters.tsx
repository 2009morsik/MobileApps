import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import {useRouter} from "expo-router";
import {Picker} from "@react-native-picker/picker"

const ConvertersScreen = () => {
    const router = useRouter();
    return (
        <SafeAreaView>
            <TouchableOpacity
                style={[styles.button, {backgroundColor:"#ff9f0a"}]}
                onPress={() => router.push('/convLengthComponent')}
            >
                <Text style={styles.buttonText}>⇄</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button:{
        backgroundColor:"#ff9f0a",
    },
    buttonText: {
        fontSize: 35,
    }
})
export default ConvertersScreen;