import React, {Component, useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
}
from 'react-native'
import { TextInput,Button } from 'react-native-paper';
import DatePicker from 'react-native-datepicker'
//Dropdown
import {Picker} from '@react-native-picker/picker';
//moment
import moment from "moment";
//import for redux
import {useSelector, useDispatch} from "react-redux";
import {validateAddExpense} from "../../services/expenseService";
import {addExpense} from "../../redux/Actions/expense";
//styles
import {styles} from "../../assets/styles/addExpenseStyles"
import {AMOUNT_IN_TAKA, EXPENSE_ADDED, NO_CATEGORY_ALERT, NOTES, SUBMIT} from "../../Theme/Strings";

const AddExpenseScreen = (props)=>{

    //controlled component note
    const [note, setNote] = useState("");
    //controlled component amount
    const [amount, setAmount] = useState(0);
    //controlled component date
    const [date, setDate] = useState(moment(). format('DD-MM-YYYY'));


    //fetch categoryList from redux
    const categoryList = useSelector(state => state.categoryReducer.categoryList);
    //controlled categorySelect
    const [categorySelect, setCategorySelect] = useState((categoryList.length>0)?categoryList[0].name:"");
    //dispatch redux actions
    const dispatch = useDispatch();


    //first-time
    useEffect(()=>{
        if (categoryList.length > 0){

        }else{
            alert(NO_CATEGORY_ALERT);
            props.navigation.navigate("manageCategory");
        }

    },[])

    //Screen some into focus remove the preset data
    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            setAmount(0);
            setDate(moment(). format('DD-MM-YYYY'));
            setNote("");
        });

        return unsubscribe;
    }, [props.navigation]);

    //on submit press
    const handleSubmit = ()=>{
        //validate input
        let val = validateAddExpense(
            note,
            categorySelect,
            amount
        )
        if (val === "ok"){
            //add expense
            dispatch(addExpense(note, categorySelect, amount, moment(date, "DD-MM-YYYY")))
            //move to expense list
            props.navigation.navigate("expenseList")
            alert(EXPENSE_ADDED);
        }else{
            //validation failed
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
                {/*react native datepicker*/}
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

            {/*

                Category Selection

            */}

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
            {/*

                Amount Selection

            */}
            <View style={styles.item}>
                <Text style={styles.input}>Amount</Text>
                <TextInput
                    label={AMOUNT_IN_TAKA}
                    mode="flat"
                    selectionColor="#2a688f"
                    style={{backgroundColor: "#fff",color:"#2a688f"}}
                    value={amount}
                    onChangeText={text => setAmount(text)}
                    keyboardType="number-pad"
                />
            </View>
            {/*

                Notes Selection

            */}
            <View style={styles.item}>
                <Text style={styles.input}>Notes</Text>
                <TextInput
                    label={NOTES}
                    mode="flat | outlined"
                    selectionColor="#2a688f"
                    style={{backgroundColor: "#fff",color:"#2a688f"}}
                    value={note}
                    onChangeText={text => setNote(text)}
                />
            </View>
            {/*

                Submit

            */}
            <View style={styles.item}>
                <Button mode="contained" onPress={() => {
                    handleSubmit()
                }}>
                    {SUBMIT}
                </Button>
            </View>


        </ScrollView>
    )
}
export default AddExpenseScreen;
