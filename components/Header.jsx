import {Image, StyleSheet, View} from "react-native";
import colors from "../design/colors";

export default function Header() {

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')} />
        </View>
    )
}

const styles= StyleSheet.create({
   container: {
        height: 200,
        backgroundColor: colors.gray_330,
       alignItems: 'center',
       justifyContent: 'center',

   }
})