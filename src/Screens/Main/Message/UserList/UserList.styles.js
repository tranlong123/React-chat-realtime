import { StyleSheet } from "react-native";
import { colors } from "../../../../theme/color";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 4,
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 50,
        flex: 1,
    },
    userDetailContainer: {
        flexDirection: 'row',
        marginLeft: 15,
        justifyContent: 'space-between',
        flex: 5,
    },
    label1: {
        color: colors.black,
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 22,
    },
    label2: {
        color: colors.black,
        opacity: 0.5,
        fontWeight: '400',
    },
    iconCheck: {
        height: 15,
        width: 15,
        alignItems: 'center'
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: colors.white,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },
    hiddenItem: {
        padding: 10,
        backgroundColor: colors.whiteIcon,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hiddenDeleteItem: {
        padding: 10,
        backgroundColor: colors.red,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hiddenIconContainer: {
        flexDirection: 'row',
    },
})