import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../theme/color";

const deviceWidth = Dimensions.get('screen').width


export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        // backgroundColor: colors.gray02,
        height: 50,
        width: deviceWidth,
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    LeftIcon: {
        width: 20,
        height: 20,
        marginRight: 15,
    },
    AudioIcon: {
        height: 22,
        width: 16,
    },
    InputTextContainer: {
        backgroundColor: colors.gray02,
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 40,
        width: deviceWidth * 0.55,
        height: 38,
        flexDirection: 'row',
        bottom: -6,
    },
    InputText: {
        color: colors.black,
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 20,
        paddingLeft: 15,
        flex: 1,
    },
    EmojiIcon: {
        padding: 10,
        width: 25,
        height: 25,
        top: 6,
        right: 8,
    },
    rightContainer: {
        display: 'flex',
        padding: 10,
        alignItems: 'center',
        right: 0,
    },
    RightIcon: {
        width: 25,
        height: 25,
        top:2,
    },
})