import React, {Component, useEffect,useState} from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    StatusBar,
    StyleSheet,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from "react-native-gesture-handler";
import AddCategoryModal from "./AddCategoryModal";
import {useDispatch, useSelector} from "react-redux";
import {addCategory, editCategory, removeCategory} from "../redux/Actions/category";

const CategoryScreen = (props)=>{

    const categoryList = useSelector(state => state.categoryReducer.categoryList);
    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [categoryName, setCategoryName] = useState("");


    const addCategoryName = (inputText)=>{
        console.log(inputText);
        dispatch(addCategory(inputText));
    }

    const addCategoryModalVisibility = ()=>{
        setIsModalVisible(true);
    }
    useEffect(()=>{
        console.log(categoryList);
    },[categoryList])

    useEffect(()=>{
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    onPress={()=>{
                        addCategoryModalVisibility()
                    }}
                >
                    <Icon name="plus-circle" size={25} color="#fff" style={{marginRight:6, marginTop:2}} />
                </TouchableOpacity>
            ),
        })
    },[])

    const deleteCategoryData = (id)=>{
        Alert.alert(
            "Are you sure want to delete this category ?",
            "",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => dispatch(removeCategory(id)) }
            ]
        );
    }
    const Item = ({ title, id }) => (
            <TouchableOpacity
                style={styles.item}
                onPress={()=>{
                deleteCategoryData(id)
                }}
            >
                <Text style={styles.title}>{title}</Text>
                <Icon name="edit" size={25} color="#000000" style={styles.editBtn} />
            </TouchableOpacity>
    );
    const renderItem = ({ item }) => (
        <Item title={item.name} id={item.id} />
    );
    return (
        <View style={{flex:1,backgroundColor:"#dee9ed"}}>
            <AddCategoryModal isModalVisible={isModalVisible} addCategoryName={addCategoryName} setIsModalVisible={setIsModalVisible}/>
            {
                <FlatList
                    data={categoryList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:10,
        borderWidth: 1,
        borderColor:'#fff',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title: {
        flex:2,
        fontSize: 17,
        alignSelf:'flex-start'
    },
    editBtn:{
        alignSelf: 'flex-end'
    }
});

export default CategoryScreen;
