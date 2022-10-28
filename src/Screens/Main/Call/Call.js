import { Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './Call.styles';
import { colors } from '../../../theme/color';

import Header from '../../../Compoments/Header/Header';
import SearchBox from '../../../Compoments/searchBox/searchBox';

import CallList from './CallList/CallList';

const Call = () => {
  return (
    <View style={styles.container}>
      <Header heading='Cuộc gọi' icon1="phone" icon2="video"/>
      <SearchBox/>
      <CallList/>
    </View>
  );
};
export default Call;
