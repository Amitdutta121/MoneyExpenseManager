import React, {Component,useState} from 'react';
import {
    View,
    Text,
    Button,
    Modal
} from 'react-native'
import DialogInput from 'react-native-dialog-input';
import {CATEGORY_NAME, CATEGORY_ENTER, CATEGORY_EXAMPLE} from "../../Theme/Strings";

const EditCategoryModal = (props)=>{

    return(
        <View>
            <DialogInput isDialogVisible={props.isModalVisible}
                         initValueTextInput={props.initText}
                         title={CATEGORY_NAME}
                         message={CATEGORY_ENTER}
                         hintInput ={CATEGORY_EXAMPLE}
                         submitInput={ (inputText) => {props.editCategoryName(props.id, inputText)} }
                         closeDialog={ () => {props.setIsModalVisible(false)}}>
            </DialogInput>
        </View>
    )
}

export default EditCategoryModal;
