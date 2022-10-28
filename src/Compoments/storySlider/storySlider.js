import React from "react";
import { View, Text, FlatList, Image } from "react-native";

import { styles } from "./storySlider.styles";

const StorySlider = ({data}) => {

    const renderItem = ({ item }) => (
        <View style={styles.userItemContainer}>
            <Image source={item.image} style={styles.userImage} />
            <Text style={styles.userName}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container} >
            <FlatList
                horizontal
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
};
export default StorySlider;