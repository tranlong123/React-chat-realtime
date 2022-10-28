import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './CallList.styles';
import { images } from '../../../../images';
import { colors } from '../../../../theme/color';


const Data = [
    { id: 1, name: 'Thiện', image: images.user_1, title: 'Cuộc gọi đến', time: '7:02', icon1:'phone-incoming', icon2: 'phone' },
    { id: 2, name: 'Sơn', image: images.user_2, title: 'Cuộc gọi đi', time: '19:06', icon1:'phone-forward', icon2: 'phone' },
    { id: 3, name: 'PLong', image: images.user_3, title: 'Cuộc gọi nhỡ', time: 'Thứ hai', icon1:'phone-cancel', icon2: 'phone' },
    { id: 4, name: 'Đức', image: images.user_4, title: 'Cuộc gọi đến', time: 'Thứ hai', icon1:'phone-incoming', icon2: 'video' },
    { id: 5, name: 'Hùng', image: images.user_5, title: 'Cuộc gọi đến', time: 'Thứ hai', icon1:'phone-incoming', icon2: 'video' },
    { id: 6, name: 'Nam', image: images.user_6, title: 'Cuộc gọi đến', time: 'Thứ hai', icon1:'phone-incoming', icon2: 'video' },
    { id: 7, name: 'An', image: images.user_7, title: 'Cuộc gọi đến', time: 'Thứ hai', icon1:'phone-incoming', icon2: 'phone' },
    { id: 8, name: 'Khang', image: images.user_8, title: 'Cuộc gọi đến', time: 'Thứ hai', icon1:'phone-incoming', icon2: 'phone' },
    { id: 9, name: 'Anh', image: images.user_9, title: 'Cuộc gọi đến', time: 'Thứ hai', icon1:'phone-incoming', icon2: 'phone' },
    { id: 10, name: 'Danh', image: images.user_10, title: 'Cuộc gọi đến', time: 'Thứ hai', icon1:'phone-incoming', icon2: 'phone' },
]

const CallList = () => {

    const renderItem = ({ item }) => (
        <View style={styles.contentContainer}>
            <View style={styles.rowLeft}>
                <Image source={item.image} style={styles.userImage} />
                <View>
                    <Text style={styles.label}>{item.name}</Text>
                    <View style={styles.TitleContainer}>
                        <MaterialCommunityIcons name={item.icon1} size={14} color={colors.gray01} />
                        <Text style={styles.label2}>{item.title}</Text>
                        <Text style={styles.label2}>{item.time}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.hand}>
                <MaterialCommunityIcons name={item.icon2} size={24} color={colors.black} />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.content}>Gần đây</Text>
            <FlatList
                data={Data}
                renderItem={renderItem}
            />
        </View>
    );
}
export default CallList;