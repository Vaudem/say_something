import {
    StyleSheet
} from "react-native";
// import {
//     responsiveFontSize,
//     responsiveHeight,
//     responsiveWidth
// } from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        // width : responsiveWidth(100),
        flex: 1,
        // paddingVertical : responsiveHeight(2),
        // paddingHorizontal : responsiveWidth(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1361', // because I like purple
        padding: 20,
    },
    quote : {
        color : "#ffffff",
        fontSize : 28,
        textAlign : "center",
    },
    author : {
        // marginVertical : responsiveHeight(5),
        color : "white",
        flex: .1,
        fontSize : 20,
        marginTop: 5,
        opacity: .4,
        textAlign : "center",
    },
    icon : {
        flex: .1,
        height : 31,
        width : 60
    }
});