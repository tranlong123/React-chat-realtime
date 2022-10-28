import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';


import { styles } from "./RegisterNext.styles";
import { colors } from '../../../theme/color';
import { images } from '../../../images';

export default function RegisterNext({ navigation }) {

    const [checked, setChecked] = React.useState('first');

    const handleRegisterNext = () => {
        navigation.navigate('Main')
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                autoFocus={true}
                placeholder="Tên người dùng"
            />
            {/* <Text style={styles.messageCenter}>{message}</Text> */}
            <TextInput
                style={styles.inputText}
                placeholder="Ngày sinh    DD-MM-YYYY"
            />

            <View style={styles.genderContainer}>
                <Text style={styles.label1}>Giới tính</Text>
                <Text style={styles.label}>Nam</Text>
                <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                />
                <Text style={styles.label}>Nữ</Text>
                <RadioButton
                    value="second"
                    status={checked === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('second')}
                />
            </View>
            <TextInput
                style={styles.inputText}
                placeholder="Số điện thoại"
            />
            <TouchableOpacity
                onPress={() => {
                    handleRegisterNext()
                }}
                style={styles.ButtonStyle}
            >
                <Text style={styles.ButtonText}>Đăng ký</Text>
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