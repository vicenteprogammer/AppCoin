import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent:{
        width: '95%',
        height: 'auto',
        backgroundColor: '#000000',
        marginLeft: '3%',
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    contextLeft:{
        width: '36%',
        alignItems: 'flex-start'
    },

    logo:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: ''
    },

    logoBit:{
        width:40,
        height:40,
        marginLeft: 2
    },

    dataQuotation:{
        fontSize : 16,
        color: '#ffff',
        paddingLeft: 2,
        fontWeight: 'bold'
    },

    contextRight:{
        width:'60%',
        alignItems: 'flex-end'
    },
    price:{
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default styles