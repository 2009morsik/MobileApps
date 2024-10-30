import {Text, View, SafeAreaView, StatusBar, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import {useState} from "react";


export default function Index() {
    const [input, setInput] = useState('')
    const [result, setResult] = useState('')
    const onButtonPress = (value: any) => {
        if (value === '=') {
            try {
                const formattedInput = input.replace(/\^/g, '**');
                setResult(eval(formattedInput))
            } catch (error) {
                setResult('error')
            }
        } else if (value === 'C') {
            setInput('');
            setResult('')

        } else {
            setInput(input + value)
        }
    }
    const getButtonStyle = (value: string) => {
        if (['/', '*', '-', 'C', '=', '+', '^', '.'].includes(value)) {
            return {backgroundColor: '#ff9f0a'};
        }
        return {backgroundColor: '#2a2a2c'};
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>
                    {result}
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    value={input}
                    onChangeText={setInput}
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.buttonContainer}>
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '.', '+', '', '', '^', '='].map(
                    (item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.button, getButtonStyle(item)]}
                            onPress={() => onButtonPress(item)}
                        >
                            <Text style={styles.buttonText}> {item} </Text>
                        </TouchableOpacity>
                    )
                )}
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    }, resultContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 10
    }, resultText: {
        fontSize: 40,
        color: 'white',

    }, inputContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: 10
    }, inputText: {
        fontSize: 30,
        color: 'white',

    },
    buttonContainer: {
        flex: 3,
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10,
        paddingTop: 40,
        paddingBottom: 200,

    },
    button: {
        fontSize: 24,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderRadius: 45,
    },
    buttonText: {
        fontSize: 35,
        color: 'white',
    }
});