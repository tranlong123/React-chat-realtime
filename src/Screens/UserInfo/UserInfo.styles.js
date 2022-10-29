import { StyleSheet } from "react-native";
import { colors } from "../../theme/color";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.white,

    },
    HeaderContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 15,
    },
    HeaderText: {
        color: colors.black,
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 36,
        paddingLeft: 15,
    },
    AvatarContainer: {
        // flex: 1,
        // backgroundColor: colors.gray,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    Avatar: {
        borderRadius: 100,
        width: 120,
        height: 120,
    },
    UserName: {
        color: colors.black,
        fontSize: 24,
        fontWeight: '500',
        lineHeight: 36,
        // paddingLeft: 15,
    },
    AvatarIconContainer: {
        position: 'absolute',
        backgroundColor: colors.white,
        height: 55,
        width: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        top: '49%',
        left: '52%',
    },
    AvatarIcon:{
        backgroundColor: colors.gray02,
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    itemContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    itemText: {
        flex: 1,
        color: colors.black,
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 26,
    },
})