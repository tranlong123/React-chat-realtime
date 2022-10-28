import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { colors } from '../../theme/color';

import People from './People/People';
import Message from './Message/Message';
import Call from './Call/Call';
import Discover from './Discover/Discover';

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            screenOptions={
                {
                    headerShown: false,
                    "tabBarActiveTintColor": colors.blueBottomTab,
                    "tabBarInactiveTintColor": colors.gray,
                    "tabBarStyle": [
                        {
                            "display": "flex"
                        },
                        null
                    ]
                }
            }
        >
            <Tab.Screen
                name="Message"
                component={Message}
                options={{
                    tabBarLabel: 'Đoạn chat',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="message1" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Call"
                component={Call}
                options={{
                    tabBarLabel: 'Cuộc gọi',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="video-camera" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="People"
                component={People}
                options={{
                    tabBarLabel: 'Danh bạ',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="people" size={24} color={color} />),
                }}
            />
            <Tab.Screen
                name="Discover"
                component={Discover}
                options={{
                    tabBarLabel: 'Discover',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-compass" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>

    );
};

export default Main;