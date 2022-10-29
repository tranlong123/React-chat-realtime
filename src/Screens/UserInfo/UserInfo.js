import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

import { Ionicons } from '@expo/vector-icons';


import { colors } from "../../theme/color";
import { styles } from "./UserInfo.styles";
import { images } from "../../images";

const ProfileItem = ({ icon, name }) => (
    <View style={styles.itemContainer}>
        <Ionicons name={icon} size={26} color={colors.black} />
        <Text style={[styles.itemText, { marginLeft: icon ? 20 : 0 }]}>
            {name}
        </Text>
    </View>
)

// const handleLogout = async () => {
//     await handleSaveCart()
//     await helper.post('http://localhost:3000/logout')
//     navigation.navigate('AUTHENTICATION')
//     dispatch(logout())
// }
const handleLogout =() => {
    navigation.navigate('Login')
}

const UserInfo = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.HeaderContainer}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}
                >
                    <Ionicons name="arrow-back" size={35} color={colors.black} />
                </TouchableOpacity>
                <Text style={styles.HeaderText}> Tôi </Text>
            </View>
            <ScrollView>
                <View style={styles.AvatarContainer}>
                    <Image source={images.user_1} style={styles.Avatar} />
                    <Text style={styles.UserName}>Trần Long</Text>
                    <View style={styles.AvatarIconContainer}>
                        <TouchableOpacity
                            style={styles.AvatarIcon}
                        >
                            <Ionicons name="camera" size={32} color={colors.black} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ChangeInfo')
                    }}
                >
                    <ProfileItem
                        icon="list"
                        name="Sửa thông tin"
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('ChangePassword')
                    }}
                >
                    <ProfileItem icon="settings" name="Đổi mật khẩu" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLogout}>
                    <ProfileItem icon="log-out" name="Đăng xuất" />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default UserInfo;