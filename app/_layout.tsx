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
            <Stack.Screen name="converter"
                          options={{headerShown: false}}
            />
        </Stack>
    );
}
