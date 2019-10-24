import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 350,
        height: 350,
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#444',
        fontSize: 40,
        paddingTop: 16,
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 12,
        fontSize: 20,
    },
    input: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 8,
        fontSize: 20,
        borderBottomWidth: 1,
        paddingBottom: 8,
    },
    button: {
        height: 32,
        marginTop: 20,
        backgroundColor: '#87CEFA',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default styles;