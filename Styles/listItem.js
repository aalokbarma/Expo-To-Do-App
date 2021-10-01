import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listItemContainer: {
        // flex: 1,
        flexDirection: 'row',
        margin: 5,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderBottomColor: '#51087e',
        borderWidth: 1,
        width: 300,
        borderRadius: 5,
        borderColor: '#51087e',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#fdf2fe',


    },
    listItemText: {
        fontSize: 20,
        color: '#51087e',
        // flex: 1,
        marginVertical: 5,
        marginHorizontal: 15

    },
    crossText: {
        color: "#f00",
        fontWeight: 'bold',
        fontSize: 25,
    }
})

export default styles;