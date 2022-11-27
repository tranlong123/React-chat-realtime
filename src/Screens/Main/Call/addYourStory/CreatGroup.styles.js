import { StyleSheet } from "react-native";
import { colors } from "../../../../theme/color";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding:10,
    },
    userImage:{
        height: 60,
        width: 60,
        borderRadius: 50,
    },
    contentContainer: {
        marginLeft: 15,
        justifyContent: 'center'
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
});
