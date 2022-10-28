import { StyleSheet } from "react-native";
import { colors } from "../../theme/color";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    userImage: {
        height: 40,
        width: 40,
        borderRadius: 50,
        marginRight: 10,
    },
    text: {
        color: colors.black,
        fontSize: 24,
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
        backgroundColor: colors.whiteIcon,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
})