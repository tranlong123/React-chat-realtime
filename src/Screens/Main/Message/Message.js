import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { images } from '../../../images';

import { styles } from './Message.styles';
import UserList from './UserList/UserList';
import Header from '../../../Compoments/Header/Header';
import SearchBox from '../../../Compoments/searchBox/searchBox';
import StorySlider from '../../../Compoments/storySlider/storySlider';

export default function Message({ navigation }) {
  const Data = [
    { id: 0, name: 'Your story', image: images.add },
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

  return (
    <>
      <StatusBar hidden={true} />

      <View style={styles.container}>
        <Header navigation={navigation} heading='Đoạn chat' icon1='camera' icon2='pencil' />
        <SearchBox />
        <StorySlider data={Data} />
        <UserList navigation={navigation} />
      </View>
    </>
  );
}

