import { StyleSheet } from "react-native";
import { colors } from "../../../theme/color";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: colors.white,
        flex: 1,
    },
    content: {
        color: colors.gray01,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 22,
        marginLeft: 10,
    }
});
