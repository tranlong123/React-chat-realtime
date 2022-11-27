import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import helper from '../../Common/helper';

import { styles } from './login.styles';
import { colors } from '../../theme/color';
import { images } from '../../images';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [iconSee, setIconSee] = useState('eye-off')
  const [seePass, setSeePass] = useState(true)
  const [check, setCheck] = useState(false)
  const [message, setMessage] = useState('')

  const isFalse = () => {
    setCheck(false)
  }

  const isTrue = () => {
    setCheck(true)
  }
  const checkLogin = async () => {
    const loginResponse = await helper.post('https://api.lsl-chat.nvquynh.codes/auth/login', {
      email,
      password,
    })
    gotoMain(loginResponse)
  }

  const gotoMain = async (res) => {
    if (res.data.msg == 'Login success') {
      dispatch(login(res.data.data))
      await getCart()
      navigation.navigate('Main')
      isFalse()
      setMessage('')
    } else {
      setMessage('Tài khoản hoặc mật khẩu không chính xác')
      isTrue()
    }
  }

  const handleLogin = async () => {
    await checkLogin()
  }
  // https://api.lsl-chat.nvquynh.codes/auth/login
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
        onChange={(event) => {
          setEmail(event.target.value)
        }}
      />
      <View style={styles.inputText}>
        <TextInput
          secureTextEntry={seePass}
          style={{
            flex: 1,
            paddingLeft: 0,
          }}
          placeholder="Enter your password"
          onChange={(event) => {
            setPassword(event.target.value)
          }}
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
      <Text style={styles.messageCenter}>{message}</Text>
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

