import React, {Component, useEffect, useState} from 'react';
import {
    View,
    Text,
    ScrollView,
}
    from 'react-native'
import { TextInput,Button } from 'react-native-paper';
import {useSelector, useDispatch} from "react-redux";
import {styles} from "../../assets/styles/editExpenseStyles";
import {AMOUNT_IN_TAKA, EXPENSE_ADDED, NOTES, UPDATE_EXPENSE,CATEGORY_NAME} from "../../Theme/Strings";
import {ADD_CATEGORY} from "../../redux/types";
import {addCategory} from "../../redux/Actions/category";


const EditExpenseScreen = (props)=>{


    const [category, setCategory] = useState(null);


    const dispatch = useDispatch();

    useEffect(()=>{
        props.navigation.setOptions({
            title: ADD_CATEGORY,
        })
    },[])

    //update category on press
    const handleSubmit = ()=>{
        if (category){
            dispatch(addCategory(category));
            props.navigation.navigate("manageCategory");
        }
    }


    return (
        <ScrollView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >

            <View style={styles.item}>
                <Text style={styles.input}>Amount</Text>
                <TextInput
                    label={CATEGORY_NAME}
                    mode="flat"
                    selectionColor="#2a688f"
                    style={{backgroundColor: "#fff",color:"#2a688f"}}
                    value={category}
                    onChangeText={text => setCategory(text)}
                />
            </View>

            <View style={styles.item}>
                <Button mode="contained" onPress={() => {
                    handleSubmit()
                }}>
                    Add Category
                </Button>
            </View>


        </ScrollView>
    )
}



export default EditExpenseScreen;
