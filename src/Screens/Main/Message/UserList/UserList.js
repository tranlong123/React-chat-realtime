import { Text, View, Image, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './UserList.styles';
import { images } from '../../../../images/index';
import { colors } from '../../../../theme/color';

const Data = [
    { id: 1, name: 'Thiện', image: images.user_1, lastMessage: 'You: What’s man! · 9:40 AM' },
    { id: 2, name: 'Sơn', image: images.user_2, lastMessage: 'You: Ok, thanks! · 9:25 AM' },
    { id: 3, name: 'PLong', image: images.user_3, lastMessage: 'You: Ok, See you in To… · Fri' },
    { id: 4, name: 'Đức', image: images.user_4, lastMessage: 'Have a good day! · Fri' },
    { id: 5, name: 'Hùng', image: images.user_5, lastMessage: 'The business plan loo… · Thu ' },
    { id: 6, name: 'Nam', image: images.user_6, lastMessage: 'You: What · 9:00 PM' },
    { id: 7, name: 'An', image: images.user_7, lastMessage: 'You: What · 9:00 PM' },
    { id: 8, name: 'Khang', image: images.user_8, lastMessage: 'You: What · 9:00 PM' },
    { id: 9, name: 'Anh', image: images.user_9, lastMessage: 'You: What · 9:00 PM' },
    { id: 10, name: 'Danh', image: images.user_10, lastMessage: 'You: What · 9:00 PM' },

]


export default function UserList({ navigation }) {
    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <View style={styles.hiddenIconContainer}>
                <View style={styles.hiddenItem}>
                    <AntDesign name="camera" size={28} color={colors.blueBottomTab} />
                </View>
                <View style={styles.hiddenItem}>
                    <FontAwesome name="phone" size={28} color={colors.blueBottomTab} />
                </View>
                <View style={styles.hiddenItem}>
                    <FontAwesome5 name="video" size={28} color={colors.blueBottomTab} />
                </View>

            </View>
            <View style={styles.hiddenIconContainer}>
                <View style={styles.hiddenItem}>
                    <Feather name="menu" size={28} color={colors.blueBottomTab} />
                </View>
                <View style={styles.hiddenItem}>
                    <FontAwesome name="bell" size={28} color={colors.blueBottomTab} />
                </View>
                <View style={styles.hiddenDeleteItem}>
                    <MaterialCommunityIcons name="delete" size={28} color={colors.white} />
                </View>
            </View>
        </View>
    );

    const renderItem = ({ item }) => {
        return (
            <View style={styles.userItemContainer}>
                <TouchableOpacity
                    style={styles.userItemContainer}
                    onPress={() => {
                        navigation.navigate('Chat')
                    }}
                >
                    <Image source={item.image} style={styles.userImage} />
                    <View style={styles.userDetailContainer}>
                        <View>
                            <Text style={styles.label1} >{item.name}</Text>
                            <Text style={styles.label2}>{item.lastMessage}</Text>
                        </View>
                        <Image source={images.checked} style={styles.iconCheck} />
                    </View>
                </TouchableOpacity>

            </View>
        );
    };
    return (
        <View style={styles.container}>
            <SwipeListView
                data={Data}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={170}
                rightOpenValue={-150}
            />
        </View>
    );
};

