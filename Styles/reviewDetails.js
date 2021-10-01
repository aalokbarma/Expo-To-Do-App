import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    reviewContainer: {
        width: 250,
        padding: 25,
        borderWidth: 1,
        borderColor: '#51087e',
        borderStyle: "solid",
        borderRadius: 15,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 340,
        marginHorizontal: 10,
        marginVertical: 150,
        backgroundColor: '#fdf2fe',
    }, 
    detailText: {
        fontSize: 20,
        fontWeight: '800',
        color: '#51087e',
        paddingVertical: 10,

    },
    reviewButtonTouch:{
        alignItems: "center",
        borderRadius: 5,
        backgroundColor: '#51087e',
        padding: 10,
        justifyContent: 'center',
        width: 350,
        marginTop: 50,
        
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700',
        width: 100,
    }
});

export default styles;