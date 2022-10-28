import React from 'react';
import { Text, View, Image } from 'react-native';


import { styles } from './AddYourStory.styles';
import { images } from '../../../../images';

const AddYourStory = () => {
    return (
        <View style={styles.container}>
            <Image source={images.add} style={styles.userImage} />
            <View style={styles.contentContainer}>
                <Text style={styles.label1}>Your Story</Text>
                <Text style={styles.label2}>Add to your Story</Text>
            </View>
        </View>
    );
}
export default AddYourStory;