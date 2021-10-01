import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    aboutContainer: {
        padding: 20,
        margin: 10,
        borderRadius: 10,
        borderColor: '#51087e',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 340,
        flex: 1,
        backgroundColor: '#fdf2fe',
    },
    aboutText: {
        fontSize: 16,
        color: '#51087e',
        fontWeight: '600',
        letterSpacing: 0.5,
        textAlign: 'justify',
        marginVertical: 8,
    },
    aboutFooter: {
        color: '#51087e',
        fontWeight: '100',
    },
    aboutContentContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        height: 565
    },
    aboutTextContainer: {

    },
    aboutFooterContainer: {
        borderTopColor: '#51087e',
        borderTopWidth: 1,
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;