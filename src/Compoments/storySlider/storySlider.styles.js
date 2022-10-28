import { StyleSheet } from "react-native";
import { colors } from "../../theme/color";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    userItemContainer:{
        alignItems:'center',
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 10,
    },
    userImage: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    userName: {
        fontSize: 13,
        fontWeight: '400',
        color: colors.gray01,
    },
})