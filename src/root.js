import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


import Login from './Screens/Login/login';
import ForgetLogin from './Screens/ForgetLogin/ForgetLogin';
import Register from './Screens/Register/Register';
import Main from './Screens/Main/Main';
import RegisterNext from './Screens/Register/RegisterNext/RegisterNext';
import Chat from './Screens/Chat/Chat';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Root() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ForgetLogin" component={ForgetLogin} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="RegisterNext" component={RegisterNext} />
                <Stack.Screen name="Chat" component={Chat} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

