import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./Header.styles";
import { images } from "../../images";
import { colors } from "../../theme/color";

const HeaderDiscover = ({ heading }) => {
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
                <Image source={images.user_1} style={styles.userImage} />
                <Text style={styles.text}>{heading}</Text>
            </View>
        </View>
    );
};
export default HeaderDiscover;