import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        width: 375,
        backgroundColor: '#51087e',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 15,
    },
    headerText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerTecxtContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
})

export default styles;