import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#dee9ed"
    },
    item :{
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:10,
        borderWidth: 1,
        borderColor:'#fff',
    },
    input: {
        fontSize:17,
        marginLeft:10,
        color:"#2a688f",
        fontWeight:'bold'
    },
    dateIcon:{
        height: 18,
        width: 18
    },
    dateInput:{
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: '#a8b3d2'
    },
    dateText:{
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
    }
})
