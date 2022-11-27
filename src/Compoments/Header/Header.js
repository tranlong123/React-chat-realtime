import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { styles } from "./Header.styles";
import { images } from "../../images";
import { colors } from "../../theme/color";

const Header = ({navigation, heading }) => {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: colors.white,
                paddingTop: 5,
                paddingBottom: 5,
            }}
        >
            <View style={styles.leftContainer}>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('UserInfo')
                }}
                >
                    <Image source={images.user_1} style={styles.userImage} />
                </TouchableOpacity>
                <Text style={styles.text}>{heading}</Text>
            </View>
        </View>
    );
};
export default Header;