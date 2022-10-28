import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './login.styles';
import { colors } from '../../theme/color';
import { images } from '../../images';

export default function Login({ navigation }) {
  const [iconSee, setIconSee] = useState('eye-off')
  const [seePass, setSeePass] = useState(true)


  const handleLogin = () => {
    navigation.navigate('Main')
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.iconStyle}>
        <Image source={images.loginIcon} />
      </View>
      <TextInput
        style={styles.inputText}
        autoFocus={true}
        placeholder="Số điện thoại hoặc email"
      />
      <View style={styles.inputText}>
        <TextInput
          secureTextEntry={seePass}
          style={{
            flex: 1,
            paddingLeft: 0,
          }}
          placeholder="Enter your password"
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
      <TouchableOpacity
        onPress={() => {
          handleLogin()
        }}
        style={styles.ButtonStyle}
      >
        <Text style={styles.ButtonText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ForgetLogin}
        onPress={() => {
          navigation.navigate('ForgetLogin')
        }}
      >
        <Text style={styles.ForgetLogin}>Quên mật khẩu?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ForgetLogin}
        onPress={() => {
          navigation.navigate('Register')
        }}
      >
        <Text style={styles.ForgetLogin}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
}

