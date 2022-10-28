import { StyleSheet } from "react-native";
import { colors } from "../../theme/color";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: colors.white
    },
    contentContainer: {
        flexDirection: 'row',
        backgroundColor: colors.gray02,
        marginHorizontal: 15,
        padding: 5,
        borderRadius: 50,
        paddingBottom: 5,
    },
    textInput: {
        width: 340,
    },
})