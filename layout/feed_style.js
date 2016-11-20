import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
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
        padding: 0
    },
    cellImage: {
        height: 80,
        width: 260,
        marginRight: 8,
        resizeMode: 'contain'
    }
});
