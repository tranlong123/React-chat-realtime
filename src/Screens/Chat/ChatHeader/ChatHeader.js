import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './ChatHeader.styles';
import { colors } from '../../../theme/color';
import { images } from '../../../images';

export default function ChatHeader({ navigation }) {
    return (
        <View style={styles.container}>


            <View style={styles.leftContainer}>
                <TouchableOpacity
                    style={styles.BackIcon}
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <Ionicons name="arrow-back" size={35} color={colors.blueBottomTab} />
                </TouchableOpacity>
                <TouchableOpacity
                // onPress={() => {
                //     navigation.navigate('Login')
                // }}
                >
                    <Image source={images.user_1} style={styles.userImage} />
                </TouchableOpacity>
                <Text style={styles.text}>Thiện</Text>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.rightIconContainer}>
                    <FontAwesome name="phone" size={24} color={colors.blueBottomTab} />
                </View>
                <View style={styles.rightIconContainer}>
                    <FontAwesome name="video-camera" size={24} color={colors.blueBottomTab} />
                </View>
                <View style={styles.rightIconContainer}>
                    <AntDesign name="exclamationcircle" size={24} color={colors.blueBottomTab} />
                </View>
            </View>
        </View>
    );
};