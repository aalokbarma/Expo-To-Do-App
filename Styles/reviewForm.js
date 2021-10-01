import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        width: 340,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#51087e',
        borderStyle: "solid",
        padding: 15,
        margin: 10,
    },
    textInput: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderColor: '#51087e',
        borderBottomWidth: 2,
        marginBottom: 5,
        minWidth: 300,
        fontSize: 18,
        color: '#51087e',
        letterSpacing: 1,
    },
    textArea: {
        minHeight: 60,
        maxHeight: 90,
    },
    addButtonContainer:{
        backgroundColor: '#51087e',
        opacity: 0.7,
        paddingVertical: 5,
        width: 310,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        borderRadius: 5,
    },
    addButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '800',
        marginVertical: 5,
    },
    errorMessage: {
        color: '#f00',
    },

});

export default styles;