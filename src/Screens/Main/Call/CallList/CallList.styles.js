import { StyleSheet } from "react-native";
import { colors } from "../../../../theme/color";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        color: colors.gray01,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 22,
        marginLeft: 10,
    },
    contentContainer: {
        display: 'flex',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowLeft: {
        flex: 1,
        marginLeft: 10,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    label: {
        color: colors.black,
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 22,
    },
    TitleContainer:{
        flexDirection:'row',
        paddingRight:10,
    },
    label2: {
        color: colors.gray01,
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 18,
        marginLeft: 10,
    },
    hand: {
        marginRight:10,
    },

});
