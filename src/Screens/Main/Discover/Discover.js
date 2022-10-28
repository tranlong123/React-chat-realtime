import { Text, View } from 'react-native';
import { styles } from './Discover.styles';

import HeaderDiscover from '../../../Compoments/Header/HeaderDiscover';
import SearchBox from '../../../Compoments/searchBox/searchBox';
import StorySlider from '../../../Compoments/storySlider/storySlider';
import DiscoverList from './DiscoverList/DiscoverList';

import { images } from '../../../images';

const Discover = () => {
    const DATA = [
        { id: 0, image: images.apple, user: 'Apple' },
        { id: 1, image: images.samsung, user: 'Samsung' },
    ];

    const DATA1 = [
        {
            id: 1,
            image: images.microsoft,
            name: 'Microsoft',
            category: 'Science, Technology & Engineering',
            content: 'Our mission is to empower every person…',
        },
        {
            id: 2,
            image: images.instagram,
            name: 'Instagram',
            category: 'Business',
            content: 'Bringing you closer to the people and thi…',
        },
        {
            id: 3,
            image: images.disney,
            name: 'Disney',
            category: 'Brand',
            content: 'Disney magic right at your fingertips',
        },
        {
            id: 4,
            image: images.facebook,
            name: 'Jamie Franco',
            category: 'Website',
            content: 'Welcome to the Facebook chat bot. Use i…',
        },
        {
            id: 5,
            image: images.mcdonalds,
            name: 'McDonalds',
            category: 'Budget Restaurant',
            content: 'Dedicated to everyone who says, i’m lovi…',
        },
    ];

    return (
        <View style={styles.container}>
            <HeaderDiscover heading='Discover' />
            <SearchBox />
            <Text style={styles.title}>Recent</Text>
            <StorySlider data={DATA} />
            <Text style={styles.title1}>More</Text>
            <View style={{ flex: 1 }}>
                <DiscoverList data={DATA1} />
            </View>
        </View>
    );
};
export default Discover;

