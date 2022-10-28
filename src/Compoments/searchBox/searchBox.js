import React from "react";
import { View, TextInput } from "react-native";

import { AntDesign } from '@expo/vector-icons';

import { styles } from "./searchBox.styles";
import { colors } from "../../theme/color";

const SearchBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <AntDesign name="search1" size={24} color={colors.gray01} />
                <TextInput
                    placeholder="Tìm kiếm"
                    style={styles.textInput}
                />
            </View>
        </View>
    );
};
export default SearchBox;