import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import { styles } from './PeopleStoryList.styles';
import { images } from '../../../../images';
import { colors } from '../../../../theme/color';



const PeopleStoryList = ({data}) => {

    const renderItem = ({ item }) => (
        <View style={styles.contentContainer}>
            <View style={styles.rowLeft}>
                <Image source={item.image} style={styles.userImage} />
                <View>
                    <Text style={styles.label}>{item.name}</Text>
                    <Text style={styles.label2}>Kỷ niệm sinh nhật của bạn ấy</Text>
                    <Text style={styles.label2}>{item.time}</Text>
                </View>
            </View>

            <View style={styles.hand}>
                <FontAwesome name="birthday-cake" size={24} color={colors.cakeColor} />
            </View>
        </View>
    );


    return (
        <View style={styles.container}>
            <Text style={styles.content}>Sự kiện (3)</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
}
export default PeopleStoryList;