import React, {Component,useState} from 'react';
import {
    View,
    Text,
    Button,
    Modal
} from 'react-native'
import DialogInput from 'react-native-dialog-input';
const AddCategoryModal = (props)=>{

    return(
        <View>
            <DialogInput isDialogVisible={props.isModalVisible}
                         title={"Category Name"}
                         message={"Enter a type of expense category"}
                         hintInput ={"Home Rent, Food Expense"}
                         submitInput={ (inputText) => {props.addCategoryName(inputText)} }
                         closeDialog={ () => {props.setIsModalVisible(false)}}>
            </DialogInput>
        </View>
    )
}

export default AddCategoryModal;