import Login from './Screens/Login/login';
import ForgetLogin from './Screens/ForgetLogin/ForgetLogin';
import Register from './Screens/Register/Register';
import Main from './Screens/Main/Main';
import RegisterNext from './Screens/Register/RegisterNext/RegisterNext';
import Chat from './Screens/Chat/Chat';
import UserInfo from './Screens/UserInfo/UserInfo';
import ChangeInfo from './Screens/ChangeInfo/ChangeInfo';
import ChangePassword from './Screens/ChangePassword/ChangePassword';

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
                <Stack.Screen name="UserInfo" component={UserInfo} />
                <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
                <Stack.Screen name="ChangePassword" component={ChangePassword} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

