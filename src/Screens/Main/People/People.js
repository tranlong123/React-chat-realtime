import React from 'react';
import { ScrollView, View } from 'react-native';

import Header from '../../../Compoments/Header/Header';
import SearchBox from '../../../Compoments/searchBox/searchBox';
import AddYourStory from './addYourStory/AddYourStory';
import PeopleList from './PeopleList/PeopleList';
import PeopleStoryList from './PeopleStoryList/PeopleStoryList';

import { styles } from './People.styles';
import { images } from '../../../images';

const Data1 = [
    { id: 1, name: 'Thiện', image: images.user_1, time: 'Hôm nay' },
    { id: 2, name: 'Sơn', image: images.user_2, time: 'Hôm nay'},
    { id: 3, name: 'PLong', image: images.user_3, time: 'Hôm qua' },
]
const Data2 = [
    { id: 1, name: 'Thiện', image: images.user_1 },
    { id: 2, name: 'Sơn', image: images.user_2 },
    { id: 3, name: 'PLong', image: images.user_3 },
    { id: 4, name: 'Đức', image: images.user_4 },
    { id: 5, name: 'Hùng', image: images.user_5 },
    { id: 6, name: 'Nam', image: images.user_6 },
    { id: 7, name: 'An', image: images.user_7 },
    { id: 8, name: 'Khang', image: images.user_8 },
    { id: 9, name: 'Anh', image: images.user_9 },
    { id: 10, name: 'Danh', image: images.user_10 },
]
const People = () => {
    return (
        <View style={styles.container}>
            <Header heading='Danh bạ' icon1= 'message-processing' icon2='account-plus' />
            <SearchBox />
            <AddYourStory/>
            <ScrollView>
                <PeopleStoryList data={Data1}/>
                <PeopleList  data={Data2}/>
            </ScrollView>
        </View>
    );
}
export default People;