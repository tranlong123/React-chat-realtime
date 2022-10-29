import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Ionicons } from '@expo/vector-icons';

import { styles } from "./ChangePassword.styles";
import { colors } from '../../theme/color';

export default function ChangePassword({ navigation }) {

    const [iconSee, setIconSee] = useState('eye-off')
    const [seePass, setSeePass] = useState(true)
    const [iconSeeNewPass, setIconSeeNewPass] = useState('eye-off')
    const [seeNewPass, setSeeNewPass] = useState(true)
    const [iconSeeRePass, setIconSeeRePass] = useState('eye-off')
    const [seeRePass, setSeeRePass] = useState(true)
    const handleChangePassword = () => {
        navigation.navigate('Main')
    }

    return (
        <View style={styles.container}>
            <View style={styles.HeaderContainer}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <Ionicons name="arrow-back" size={35} color={colors.black} />
                </TouchableOpacity>
                <Text style={styles.HeaderText}>Đổi mật khẩu</Text>
            </View>
            <View style={styles.inputText}>
                <TextInput
                    autoFocus={true}
                    secureTextEntry={seePass}
                    style={{
                        flex: 1,
                        paddingLeft: 0,
                    }}
                    placeholder="Mật khẩu hiện tại"
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
            <View style={styles.inputText}>
                <TextInput
                    secureTextEntry={seeNewPass}
                    style={{
                        flex: 1,
                        paddingLeft: 0,
                    }}
                    placeholder="Mật khẩu mới"
                />
                <TouchableOpacity
                    onPress={() => {
                        if (seeNewPass == false) {
                            setIconSeeNewPass('eye-off')
                            setSeeNewPass(true)
                        } else {
                            setIconSeeNewPass('eye')
                            setSeeNewPass(false)

                        }
                    }}
                >
                    <Feather name={iconSeeNewPass} size={24} color={colors.blueBottomTab} style={{ padding: 10 }} />
                </TouchableOpacity>
            </View>


            <View style={styles.inputText}>
                <TextInput
                    secureTextEntry={seeRePass}
                    style={{
                        flex: 1,
                        paddingLeft: 0,
                    }}
                    placeholder="Điền lại mật khẩu"
                />
                <TouchableOpacity
                    onPress={() => {
                        if (seeRePass == false) {
                            setIconSeeRePass('eye-off')
                            setSeeRePass(true)
                        } else {
                            setIconSeeRePass('eye')
                            setSeeRePass(false)

                        }
                    }}
                >
                    <Feather name={iconSeeRePass} size={24} color={colors.blueBottomTab} style={{ padding: 10 }} />
                </TouchableOpacity>
            </View>


            <TouchableOpacity
                onPress={() => {
                    handleChangePassword()
                }}
                style={styles.ButtonStyle}
            >
                <Text style={styles.ButtonText}>Thay đổi</Text>
            </TouchableOpacity>

        </View>
    );

};