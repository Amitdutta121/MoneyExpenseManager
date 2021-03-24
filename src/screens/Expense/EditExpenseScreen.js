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
import {validateAddExpense} from "../../services/expenseService";
import {editExpense} from "../../redux/Actions/expense";
import {PRIMARY_COLOR} from "../../Theme/Constant";
import {styles} from "../../assets/styles/editExpenseStyles";

const EditExpenseScreen = (props)=>{

    //controlled component note
    const [note, setNote] = useState("");
    //controlled component amount
    const [amount, setAmount] = useState(0);
    //controlled component date
    const [date, setDate] = useState();
    //setId from the previous screen
    const [id, setId] = useState();


    //fetch categoryList for dropdown
    const categoryList = useSelector(state => state.categoryReducer.categoryList);
    //selected category
    const [categorySelect, setCategorySelect] = useState();

    const dispatch = useDispatch();

    useEffect(()=>{
        props.navigation.setOptions({
            title: 'Edit Expense',
        })
    },[])

    //get data from prevvious screen and save to state
    useEffect(()=>{
        let {categoryName, amount, note, date, id} = props.route.params
        setCategorySelect(categoryName)
        setDate(date)
        setAmount(amount)
        setNote(note)
        setId(id);
    },[])


    //update expense on press
    const handleSubmit = ()=>{

        //validation
        let val = validateAddExpense(
            note,
            categorySelect,
            amount
        )
        if (val === "ok"){
            dispatch(editExpense(id, note, categorySelect, amount,date))
            alert("Expense Updated");
        }else{
            //validation failed
            alert(val)
        }
    }


    return (
        <ScrollView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
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
                    iconSource={require('../../assets/img/calendar.png')}
                    customStyles={{
                        dateIcon: {
                            ...styles.dateIcon
                        },
                        dateInput: {
                            ...styles.dateInput
                        },
                        dateText: {
                            ...styles.dateText
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
                    style={{backgroundColor: "#fff",color:{PRIMARY_COLOR}}}
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



export default EditExpenseScreen;
