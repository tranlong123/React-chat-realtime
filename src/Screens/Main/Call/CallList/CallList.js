import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './CallList.styles';
import { images } from '../../../../images';
import { colors } from '../../../../theme/color';


const Data = [
    { id: 1, name: 'nhóm1', image: images.user_1, title: 'ad', time: '7:02', icon1:'phone-incoming', icon2: 'phone' },
    { id: 2, name: 'Nhóm 2', image: images.user_2, title: 'helo', time: '19:06', icon1:'phone-forward', icon2: 'phone' },
    { id: 3, name: 'Nhóm 3', image: images.user_3, title: 'as', time: 'Thứ hai', icon1:'phone-cancel', icon2: 'phone' },
    { id: 4, name: 'Nhóm 4', image: images.user_4, title: 'as', time: 'Thứ hai', icon1:'phone-incoming', icon2: 'video' },
    { id: 5, name: 'Nhóm 5', image: images.user_5, title: 'as', time: 'Thứ hai', icon1:'phone-incoming', icon2: 'video' },   
]
const CallList = () => {

    const renderItem = ({ item }) => (
        <View style={styles.contentContainer}>
            <View style={styles.rowLeft}>
                <Image source={item.image} style={styles.userImage} />
                <View>
                    <Text style={styles.label}>{item.name}</Text>
                    <View style={styles.TitleContainer}>
                        <Text style={styles.label2}>{item.title}</Text>
                        <Text style={styles.label2}>{item.time}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.hand}>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* <Text style={styles.content}>Gần đây</Text> */}
            <FlatList
                data={Data}
                renderItem={renderItem}
            />
        </View>
    );
}
export default CallList;