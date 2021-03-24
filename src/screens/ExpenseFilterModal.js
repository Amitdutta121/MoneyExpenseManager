import React, {Component,useState} from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import {Button, TextInput} from "react-native-paper";
import {Picker} from "@react-native-picker/picker";
import {weekList, monthList, yearList} from "../util/DateUtil";

const ExpenseFilterModal = (props)=>{
    const [amount, setAmount] = useState("");

    const [week, setWeek] = useState(weekList[0]);
    const [month, setMonth] = useState(monthList[0]);


    const [year, setYear] = useState(yearList[0]);

    return(
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    props.setModalVisible(!props.modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                        {/*<Pressable*/}
                        {/*    style={[styles.button, styles.buttonClose]}*/}
                        {/*    onPress={() => props.setModalVisible(!props.modalVisible)}*/}
                        {/*>*/}
                        {/*    <Text style={styles.textStyle}>Hide Modal</Text>*/}
                        {/*</Pressable>*/}
                        <View style={styles.item}>
                            <Text style={styles.input}>Select Week</Text>
                            <Picker
                                selectedValue={week}
                                onValueChange={(itemValue, itemIndex) =>{
                                    setWeek(itemValue)
                                }
                                }>
                                {
                                    weekList.map((value, index)=>{
                                        return(
                                            <Picker.Item key={index} label={value} value={value} />
                                        )
                                    })
                                }
                            </Picker>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.input}>Select Month</Text>
                            <Picker
                                selectedValue={month}
                                onValueChange={(itemValue, itemIndex) =>{
                                    setMonth(itemValue)
                                }
                                }>
                                {
                                    monthList.map((value, index)=>{
                                        return(
                                            <Picker.Item key={index} label={value} value={value} />
                                        )
                                    })
                                }
                            </Picker>
                        </View>
                    <View style={styles.item}>
                        <Text style={styles.input}>Select Year</Text>
                        <Picker
                            selectedValue={year}
                            onValueChange={(itemValue, itemIndex) =>{
                                setYear(itemValue)
                            }
                            }>
                            {
                                yearList.map((value, index)=>{
                                    return(
                                        <Picker.Item key={index} label={value} value={value} />
                                    )
                                })
                            }
                        </Picker>
                    </View>
                    <View style={styles.item}>
                        <Button mode="contained" onPress={() => {
                            props.expenseFilterHandleSubmit(week, month, year)
                            props.setModalVisible(!props.modalVisible);
                        }}>
                            Filter
                        </Button>
                    </View>

                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        marginTop: 22,
        backgroundColor:"#dee9ed",
    },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
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
    }
});

export default ExpenseFilterModal;
