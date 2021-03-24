import React, {Component, useEffect, useState} from 'react';
import {PRIMARY_COLOR} from "../../Theme/Constant";
import {
    View ,
    Text,
    StyleSheet
} from 'react-native'
import {useSelector} from "react-redux";
import {TOTAL_EXPENSE} from "../../Theme/Strings";

const DashboardScreen = ()=>{

    const expenseList = useSelector(state => state.expenseReducer.expenseList);


    useEffect(()=>{

    },[])
    const calculateExpense = (expList)=>{
        let totalExpense = 0;
        if (expenseList.length > 0){
            expenseList.map((value, index)=>{
                totalExpense = totalExpense + parseInt(value.amount)
            })
        }
        return totalExpense;
    }
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={{color:PRIMARY_COLOR}}>{TOTAL_EXPENSE}</Text>
                <Text style={{fontSize:40}}>{`৳ ${calculateExpense(expenseList)}`}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        backgroundColor: "#dee9ed"

    },
    card :{
        marginTop:20,
        backgroundColor: '#fff',
        paddingVertical:10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:10,
        borderWidth: 1,
        borderColor:'#fff',
        alignItems:'center'
    },
})

export default DashboardScreen;
