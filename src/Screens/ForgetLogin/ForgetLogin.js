import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from "./ForgetLogin.styles";
import { colors } from '../../theme/color';
import { images } from '../../images';

export default function ForgetLogin({ navigation }) {
    const [iconSee, setIconSee] = useState('eye-off')
    const [seePass, setSeePass] = useState(true)

    const handleForgetLogin = () => {
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconStyle}>
                <Image source={images.loginIcon} />
            </View>
            <TextInput
                style={styles.inputText}
                autoFocus={true}
                placeholder="Số điện thoại hoặc email của bạn"
            />
            <TouchableOpacity
                onPress={() => {
                    handleForgetLogin()
                }}
                style={styles.ButtonStyle}
            >
                <Text style={styles.ButtonText}>Gửi mail xác minh</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.ForgetLogin}
                onPress={() => {
                    navigation.navigate('Login')
                }}
            >
                <Text style={styles.ForgetLogin}>Quay lại Đăng nhập</Text>
            </TouchableOpacity>
        </View>
    );

};