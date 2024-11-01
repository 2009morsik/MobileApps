import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import {useRouter} from "expo-router";
import {Picker} from "@react-native-picker/picker"

const ConverterLength = () => {
    const router = useRouter();
    type Unit = 'meters' | 'kilometers' | 'miles' | 'centimeters';
    const [inputValue, setInputValue] = useState('');
    const [fromUnit, setFromUnit] = useState<Unit>('meters');
    const [toUnit, setToUnit] = useState<Unit>('kilometers');
    const [result, setResult] = useState<number | string>('');

    const units: Record<Unit, number> = {
        meters: 0.001,
        kilometers: 1,
        miles: 0.621371,
        centimeters: 0.00001,
    };

    const convertLength = () => {
        const fromValue = parseFloat(inputValue) * units[fromUnit];
        const convertedValue = fromValue / units[toUnit];
        setResult(convertedValue);
    };


    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => router.back()} style={styles.buttonExit}>
                <Text style={styles.text}>←</Text>
            </TouchableOpacity>
            <TextInput style={styles.text}
                       placeholder="введите значение"
                       keyboardType="numeric"
                       value={inputValue}
                       onChangeText={setInputValue}
            />
            <View>
                <Picker selectedValue={fromUnit} onValueChange={(itemValue) => setFromUnit(itemValue)}>
                    {Object.keys(units).map((unit) => (
                        <Picker.Item key={unit} label={unit} value={unit}/>
                    ))}
                </Picker>
                <Picker selectedValue={toUnit} onValueChange={(itemValue) => setToUnit(itemValue)}>
                    {Object.keys(units).map((unit) => (
                        <Picker.Item key={unit} label={unit} value={unit}/>
                    ))}
                </Picker>
            </View>
            <TouchableOpacity style={styles.buttonConv} onPress={convertLength}>
                <Text style={styles.text}>Конвертировать</Text>
            </TouchableOpacity>
            {result !== '' && <Text style={styles.text}>Результат: {result}</Text>}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    }, resultText: {
        fontSize: 40,
        color: 'white',
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
    buttonConv: {
        fontSize: 24,
        borderRadius: 45,
        height: 60,
        width: 400,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 35,
        color: 'white',
    },
    text: {
        color: "white",
        fontSize: 35,
    },
    picker: {
        borderColor: 'white',
        borderWidth: 10,
    }
});

export default ConverterLength;