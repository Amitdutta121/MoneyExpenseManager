import React, {Component, useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    RefreshControl
}
from 'react-native'
import { TextInput,Button } from 'react-native-paper';
import DatePicker from 'react-native-datepicker'
import {useSelector, useDispatch} from "react-redux";
import {Picker} from '@react-native-picker/picker';
import {validateAddExpense} from "../services/expenseService";
import {editExpense} from "../redux/Actions/expense";

const EditExpenseScreen = (props)=>{

    const [note, setNote] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState();
    const [id, setId] = useState();


    const categoryList = useSelector(state => state.categoryReducer.categoryList);

    const [categorySelect, setCategorySelect] = useState();

    const dispatch = useDispatch();

    useEffect(()=>{
        props.navigation.setOptions({
            title: 'Edit Expense',
        })
    },[])

    useEffect(()=>{
        let {categoryName, amount, note, date, id} = props.route.params
        setCategorySelect(categoryName)
        setDate(date)
        setAmount(amount)
        setNote(note)
        setId(id);
    },[])


    const handleSubmit = ()=>{
        let val = validateAddExpense(
            note,
            categorySelect,
            amount
        )
        if (val === "ok"){
            dispatch(editExpense(id, note, categorySelect, amount,date))
            alert("Expense Updated");
        }else{
            alert(val)
        }
    }


    return (
        <ScrollView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex:1, backgroundColor:"#dee9ed"}}

        >

            <View style={styles.item}>
                <Text style={styles.input}>Date</Text>
                <DatePicker
                    style={{width: 100+'%'}}
                    date={date}
                    mode="date"
                    placeholder="To Date"
                    format="DD-MM-YYYY"
                    minDate="01-01-2018"
                    maxDate="31-12-3000"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    iconSource={require('../assets/img/calendar.png')}
                    customStyles={{
                        dateIcon: {
                            height: 18,
                            width: 18
                        },
                        dateInput: {
                            borderTopWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderBottomColor: '#a8b3d2'
                        },
                        dateText: {
                            color: 'black',
                            fontSize: 16,
                            fontWeight: '500',
                        }
                    }}
                    onDateChange={(date) => {
                        setDate(date)
                    }}/>
            </View>

            <View style={styles.item}>
                <Text style={styles.input}>Select Category</Text>
                <Picker
                    selectedValue={categorySelect}
                    onValueChange={(itemValue, itemIndex) =>{
                        setCategorySelect(itemValue)
                    }
                    }>
                    {
                        categoryList.map((value, index)=>{
                            return(
                                <Picker.Item key={index} label={value.name} value={value.name} />
                            )
                        })
                    }
                </Picker>
            </View>

            <View style={styles.item}>
                <Text style={styles.input}>Amount</Text>
                <TextInput
                    label="Amount"
                    mode="flat"
                    selectionColor="#2a688f"
                    style={{backgroundColor: "#fff",color:"#2a688f"}}
                    value={amount}
                    onChangeText={text => setAmount(text)}
                    keyboardType="number-pad"
                />
            </View>

            <View style={styles.item}>
                <Text style={styles.input}>Notes</Text>
                <TextInput
                    label="Notes"
                    mode="flat | outlined"
                    selectionColor="#2a688f"
                    style={{backgroundColor: "#fff",color:"#2a688f"}}
                    value={note}
                    onChangeText={text => setNote(text)}
                />
            </View>

            <View style={styles.item}>
                <Button mode="contained" onPress={() => {
                    handleSubmit()
                }}>
                    Update Expense
                </Button>
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
})

export default EditExpenseScreen;
