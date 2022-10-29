import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from "./Header.styles";
import { images } from "../../images";
import { colors } from "../../theme/color";

const Header = ({ navigation, heading, icon1, icon2 }) => {

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <TouchableOpacity

                    onPress={() => {
                        navigation.navigate('UserInfo')
                    }}
                >
                    <Image source={images.user_1} style={styles.userImage} />
                </TouchableOpacity>
                <Text style={styles.text}>{heading}</Text>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.rightIconContainer}>
                    <MaterialCommunityIcons name={icon1} size={24} color={colors.black} />
                </View>
                <View style={styles.rightIconContainer}>
                    <MaterialCommunityIcons name={icon2} size={24} color={colors.black} />
                </View>
            </View>
        </View>
    );
};
export default Header;