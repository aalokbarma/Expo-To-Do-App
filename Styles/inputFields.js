import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputFieldContainer: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderColor: '#51087e',
        borderBottomWidth: 2,
        marginBottom: 5,
        minWidth: 300,
        fontSize: 18,
    },
    addButtonContainer:{
        backgroundColor: '#51087e',
        opacity: 0.7,
        paddingVertical: 5,
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '800',
    },
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        padding: 0,
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold',
      },
      modalClose: {
        marginTop: 0,
        marginBottom: 0,
        fontWeight: '900',
      },
      modalContent: {
        flex: 1,
      }
});

export default styles;