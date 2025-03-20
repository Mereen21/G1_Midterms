import { StyleSheet } from 'react-native';
// import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export const adminStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    headercontainer: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'left',
        backgroundColor: '#5C5C5C',
    },

    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,

    },


    welcomeText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        fontWeight: 'bold',
    },

    overviewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginStart: 20,
        marginEnd: 20,
    },

    overviewBox: {
        width: '100%',
        height: 250,
        backgroundColor: '#2E2E2E',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
    },
    box: {
        width: '80%',
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#333',
        borderRadius: 10,
        alignItems: 'center',
    },
    boxText: {
        fontSize: 18,
        color: 'white',
    },
    overviewText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
    },
    // Top Navigation
    topBox: {
        backgroundColor: '#007AFF', // Blue top bar
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 10,
    },

    topBoxText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    // Bottom Navigation Styles
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#222', // Dark background
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    navBox: {
        width: '18%',  // Each box takes equal space
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    navText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    navIcon: {
        width: 30, // width of the image
        height: 30, // height of the image
    },
    textBox: {

        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
        borderColor: '#fff', // White border to make it stand out
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4, // Space between image and text box
    },
});