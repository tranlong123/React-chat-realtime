import React from 'react';
import { Text, View, Image } from 'react-native';


import { styles } from './CreatGroup.styles';
import { images } from '../../../../images';

const CreatGroup = () => {
    return (
        <View style={styles.container}>
            <Image source={images.add} style={styles.userImage} />
            <View style={styles.contentContainer}>
                <Text style={styles.label1}>Creat group</Text>
                <Text style={styles.label2}>Creat New Group</Text>
            </View>
        </View>
    );
}
export default CreatGroup;