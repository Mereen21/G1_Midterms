import { StyleSheet } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
// import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const usermanageStyles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },

    welcomeText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Keeps newuserBox on the right
        margin: 20,
    },

    leftContainer: {
        flexDirection: 'row', // Keeps logo and text together
        alignItems: 'center',
    },

    newuserBox: {
        width: 100, // Adjust as needed
        height: 40, // Adjust as needed
        padding: 10,
        backgroundColor: "#f0f0f0",
        borderRadius: 5,

    },
    newusertxt: {
        color: 'black',
        fontWeight: 'bold', // Changed from '100' to 'bold'
        fontSize: 14, // Optional: Adjust for better visibility
        textAlign: 'right',
    },

    desc: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },

    maincontainer: {
        flex: 1, // Allows it to expand and fill available space
        padding: 20,
        paddingBottom: '100', // Leaves space above the bottom menu
    },

    listcontainer1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },

    listcontainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 40,
    },

    customerbox: {
        width: '100%',
        height: 200,
        backgroundColor: '#2E2E2E',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
    },
});

