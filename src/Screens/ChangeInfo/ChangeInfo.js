import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';

import { styles } from "./ChangeInfo.styles";
import { colors } from '../../theme/color';

export default function ChangeInfo({ navigation }) {

    const [checked, setChecked] = React.useState('first');

    const handleChangeInfo = () => {
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
                <Text style={styles.HeaderText}>Sửa thông tin</Text>
            </View>
            <TextInput
                style={styles.inputText}
                autoFocus={true}
                placeholder="Tên người dùng: Trần Long"
            />
            <TextInput
                style={styles.inputText}
                placeholder="Ngày sinh: 10-02-2000"
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
                placeholder="SĐT: 09****4929"
            />
            <TextInput
                style={styles.inputText}
                placeholder="Điền Mật khẩu"
            />
            <TouchableOpacity
                onPress={() => {
                    handleChangeInfo()
                }}
                style={styles.ButtonStyle}
            >
                <Text style={styles.ButtonText}>Thay đổi</Text>
            </TouchableOpacity>

        </View>
    );

};