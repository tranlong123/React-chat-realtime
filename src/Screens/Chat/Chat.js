import React from 'react';
import { Text, View, TextInput } from 'react-native';

import { styles } from './Chat.styles';

import ChatHeader from './ChatHeader/ChatHeader';
import ChatInput from './ChatInput/ChatInput';

export default function Chat({ navigation }) {
    return (
        <View style={styles.container}>
            <ChatHeader  navigation={navigation} />
            <ChatInput navigation={navigation} />
        </View>
    );
};