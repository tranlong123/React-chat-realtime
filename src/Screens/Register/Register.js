import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from "./Register.styles";
import { colors } from '../../theme/color';
import { images } from '../../images';

export default function Register({ navigation }) {
    const [iconSee, setIconSee] = useState('eye-off')
    const [seePass, setSeePass] = useState(true)
    const [iconSeeRe, setIconSeeRe] = useState('eye-off')
    const [seeRePass, setSeeRePass] = useState(true)

    const handleRegister = () => {
        navigation.navigate('RegisterNext')
    }

    return (
        <View style={styles.container}>
            <View style={styles.iconStyle}>
                <Image source={images.loginIcon} />
            </View>
            <TextInput
                style={styles.inputText}
                autoFocus={true}
                placeholder="Email của bạn"
            />
            <View style={styles.inputText}>
                <TextInput
                    secureTextEntry={seePass}
                    style={{
                        flex: 1,
                        paddingLeft: 0,
                    }}
                    placeholder="Mật khẩu"
                />
                <TouchableOpacity
                    onPress={() => {
                        if (seePass == false) {
                            setIconSee('eye-off')
                            setSeePass(true)
                        } else {
                            setIconSee('eye')
                            setSeePass(false)

                        }
                    }}
                >
                    <Feather name={iconSee} size={24} color={colors.blueBottomTab} style={{ padding: 10 }} />
                </TouchableOpacity>
            </View>
            {/* <Text style={styles.messageCenter}>{message}</Text> */}
            <View style={styles.inputText}>
                <TextInput
                    secureTextEntry={seeRePass}
                    style={{
                        flex: 1,
                        paddingLeft: 0,
                    }}
                    placeholder="Nhập lại Mật khẩu"
                />
                <TouchableOpacity
                    onPress={() => {
                        if (seeRePass == false) {
                            setIconSeeRe('eye-off')
                            setSeeRePass(true)
                        } else {
                            setIconSeeRe('eye')
                            setSeeRePass(false)
                        }
                    }}
                >
                    <Feather name={iconSeeRe} size={24} color={colors.blueBottomTab} style={{ padding: 10 }} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => {
                    handleRegister()
                }}
                style={styles.ButtonStyle}
            >
                <Text style={styles.ButtonText}>Tiếp tục</Text>
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