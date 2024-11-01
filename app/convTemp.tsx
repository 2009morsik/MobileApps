import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import {useRouter} from "expo-router";
import {Picker} from "@react-native-picker/picker"

const ConverterTemperature = () => {
    const router = useRouter();
    type Unit = 'celsius' | 'fahrenheit' | 'kelvin';
    const [inputValue, setInputValue] = useState('');
    const [fromUnit, setFromUnit] = useState<Unit>('celsius');
    const [toUnit, setToUnit] = useState<Unit>('fahrenheit');
    const [result, setResult] = useState<number | string>('');

    const units: Record<Unit, number> = {
        celsius: 1,
        fahrenheit: 1,
        kelvin: 0.00001,
    };

    const convertTemp = () => {
        const inputTemp = parseFloat(inputValue);
        let inCelsius: number;

        // Конвертация во время Цельсия
        switch (fromUnit) {
            case 'celsius':
                inCelsius = inputTemp;
                break;
            case 'fahrenheit':
                inCelsius = (inputTemp - 32) * 5 / 9;
                break;
            case 'kelvin':
                inCelsius = inputTemp - 273.15;
                break;
            default:
                inCelsius = inputTemp;
        }

        // Конвертация из Цельсия в целевую единицу
        let convertedValue: number;
        switch (toUnit) {
            case 'celsius':
                convertedValue = inCelsius;
                break;
            case 'fahrenheit':
                convertedValue = (inCelsius * 9 / 5) + 32;
                break;
            case 'kelvin':
                convertedValue = inCelsius + 273.15;
                break;
            default:
                convertedValue = inCelsius;
        }

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
            <TouchableOpacity style={styles.buttonConv} onPress={convertTemp}>
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

export default ConverterTemperature;