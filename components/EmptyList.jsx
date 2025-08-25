import {Image, StyleSheet, Text, View} from "react-native";
import colors from "../design/colors";

export default function EmptyList() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Vector.png')}/>
            <Text style={styles.titulo}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.subtitulo}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
        marginHorizontal: 20
    },
    titulo: {
        color: colors.gray_500,
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30

    },
    subtitulo: {
        color: colors.gray_500,
        fontSize: 18,
    }
})