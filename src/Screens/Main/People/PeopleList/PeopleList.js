import React from 'react';
import { Text, View, Image, FlatList, ScrollView } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './PeopleList.styles';
import { images } from '../../../../images';
import { colors } from '../../../../theme/color';



const PeopleList = ({data}) => {

    const renderItem = ({ item }) => (
        <View style={styles.contentContainer}>
            <View style={styles.rowLeft}>
                <Image source={item.image} style={styles.userImage} />
                <Text style={styles.label}>{item.name}</Text>
                <Text style={styles.timeTag}>8 min</Text>
            </View>

            <View style={styles.hand}>
                <MaterialCommunityIcons name="hand-wave" size={24} color={colors.black} />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.content}>Đang hoạt động (10)</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
}
export default PeopleList;