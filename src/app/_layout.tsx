import { Stack } from 'expo-router';
import '../../global.css';

export default function RootLayout() {
    return (
        <Stack> 
            <Stack.Screen name="index" options={{ title: 'Exercise'}} />
            <Stack.Screen 
                name="exercise/[id]" 
                options={{ headerShown: false, animation: 'slide_from_bottom' }} />
        </Stack> 
    );
}