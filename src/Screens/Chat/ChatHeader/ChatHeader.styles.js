import { StyleSheet,Dimensions } from "react-native";
import { colors } from "../../../theme/color";

const deviceWidth = Dimensions.get('screen').width


export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        borderBottomColor: colors.gray,
        borderBottomWidth: 0.5,
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',

    },
    BackIcon: {
        left:-5,
        top: -1,
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userImage: {
        height: 36,
        width: 36,
        borderRadius: 50,
        marginRight: 10,
    },
    text: {
        color: colors.black,
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 26,
    },
    rightContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    rightIconContainer: {
        padding: 10,
        marginLeft: 10,
        width: 46,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
    }
})