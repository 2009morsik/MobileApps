import {Stack} from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index"
                          options={{headerShown: false}}
            />
            <Stack.Screen name="convLengthComponent"
                          options={{headerShown: false}}
            />
            <Stack.Screen name="converters"
                          options={{headerShown: false}}
            />
            <Stack.Screen name="convTemp"
                          options={{headerShown: false}}
            />
            <Stack.Screen name="convWeight"
                          options={{headerShown: false}}
            /><Stack.Screen name="convData"
                          options={{headerShown: false}}
            /><Stack.Screen name="convSquare"
                          options={{headerShown: false}}
            />
        </Stack>
    );
}
