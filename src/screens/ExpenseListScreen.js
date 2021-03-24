import React, {Component, useEffect, useState} from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    Alert
}
    from 'react-native'
import {useSelector, useDispatch} from "react-redux";
import {removeExpense} from "../redux/Actions/expense";
import Icon from "react-native-vector-icons/FontAwesome";


const ExpenseListScreen = (props)=>{

    const expenseList = useSelector(state => state.expenseReducer.expenseList);
    const dispatch = useDispatch();



    const Item = ({categoryName, amount, note, date, id}) => (
        <View style={styles.item}>
            <TouchableOpacity
                style={{...styles.title, flex:10}}
                onPress={()=>{
                    deleteExpense(id);
                }}
            >
                    <View style={styles.singleItem}>
                        <Text style={{color:"#2a688f", fontWeight:'bold', fontSize:15}}>Date: </Text>
                        <Text style={styles.font15}>{new Date(date).toDateString()}</Text>
                    </View>
                    <View style={styles.singleItem}>
                        <Text style={styles.singleItemTitle}>Category Name: </Text>
                        <Text style={styles.font15}>{categoryName}</Text>
                    </View>
                    <View style={styles.singleItem}>
                        <Text style={styles.singleItemTitle}>Amount : </Text>
                        <Text style={styles.font15}>{amount}</Text>
                    </View>
                    <View style={styles.singleItem}>
                        <Text style={styles.singleItemTitle}>Note : </Text>
                        <Text style={styles.font15}>{note}</Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={{...styles.editBtn, flex:1, alignSelf:'flex-end'}}
                onPress={()=>{
                    editExpense(categoryName, amount, note, date, id)
                }}
            >
                <Icon name="edit" size={25} color="#000000" />
            </TouchableOpacity>

        </View>
    );

    const editExpense = (categoryName, amount, note, date, id)=>{
        props.navigation.navigate("editExpense",{
            categoryName,
            amount,
            note,
            date,
            id
        });
    }
    const deleteExpense = (id)=>{
        Alert.alert(
            "Are you sure want to delete this expense ?",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => dispatch(removeExpense(id)) }
            ]
        );
    }


    const renderItem = ({ item }) => (
        <Item
            categoryName={item.categoryName}
            amount={item.amount}
            note={item.note}
            date={item.date}
            id={item.id}
        />
    );

    return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={expenseList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dee9ed"
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:10,
        borderWidth: 1,
        borderColor:'#fff',
        justifyContent:'space-between',
        flexDirection: 'row'
    },
    title: {
        alignSelf:'flex-start'
    },
    editBtn:{
        alignSelf: 'flex-end'
    },
    singleItem:{
        flexDirection: 'row',
        marginBottom:5
    },
    singleItemTitle:{
        color:"#2a688f",
        fontWeight:'bold',
        fontSize:15
    },
    font15:{
        fontSize :15
    }
});

export default ExpenseListScreen;
