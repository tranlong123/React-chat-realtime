import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './ChatInput.styles';
import { colors } from '../../../theme/color';
import { images } from '../../../images';

export default function ChatInput({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <TouchableOpacity
                    onPress={() => {

                    }}
                >
                    <Image source={images.Actions} style={styles.LeftIcon} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {

                    }}
                >
                    <Image source={images.Photo} style={styles.LeftIcon} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {

                    }}
                >
                    <Image source={images.Gallery} style={styles.LeftIcon} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {

                    }}
                >
                    <Image source={images.Audio} style={styles.AudioIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.InputTextContainer}>
                <TextInput
                    autoFocus={true}
                    style={styles.InputText}
                    placeholder="Nhắn tin"
                />
                <TouchableOpacity
                    onPress={() => {

                    }}
                >
                    <Image source={images.Emoji} style={styles.EmojiIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity
                    onPress={() => {

                    }}
                >
                    <Image source={images.Like} style={styles.RightIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};