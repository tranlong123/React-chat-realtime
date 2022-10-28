import { StyleSheet,Dimensions } from "react-native";
import { colors } from "../../theme/color";
const deviceWidth = Dimensions.get('screen').width

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyle: {
        top:'-10%',
    },
    inputText:{
        width: deviceWidth * 0.8,
        height: 50,
        flexDirection: 'row',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30,
        borderColor:  colors.blueBottomTab,
        borderRadius: 20,
        borderWidth: 1,
    },
    ButtonStyle: {
        width: deviceWidth * 0.8,
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        backgroundColor: colors.blueBottomTab,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonText: {
        fontFamily: 'sans-serif',
        backgroundColor: colors.blueBottomTab,
        color: colors.white,
        fontWeight: '400',
    },
    ForgetLogin: {
        color: colors.blueBottomTab,
        marginTop: 5,
    }
});
