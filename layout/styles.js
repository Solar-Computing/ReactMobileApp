import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
    /*
    * Navigation Bar
    */
    navbar: {
        backgroundColor: '#2c3239',
        paddingTop: 20,
        paddingBottom: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    navBarImage: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusbar: {
        backgroundColor: '#191f28',
        paddingTop: 3,
        paddingBottom: 3,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    statusbarTitles: {
        color: '#F5FCFF',
        justifyContent: 'center',
        //paddingLeft: 40,
        textAlign: 'center',
        flex: 1
    },

    /*
    *   Feed
    */
    rowSeparator: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        height: 1,
        marginLeft: 4
    },
    rowSeparatorHighlighted: {
        opacity: 0.0
    },
    cellContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 4
    },
    cellImage: {
        height: 80,
        width: 60,
        marginRight: 8,
        resizeMode: 'contain'
    }
});
