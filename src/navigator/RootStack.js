import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import DrawerStack from "./DrawerStack";
import EditExpenseScreen from "../screens/Expense/EditExpenseScreen";
import React from "react";
import AddCategoryScreen from "../screens/Category/AddCategoryScreen";

const RootStack = createStackNavigator();


const navOptionHandler = () => ({
    headerShown: false
})

const RootStackNavigation = ()=>{
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="launchPage" component={DrawerStack} options={navOptionHandler}/>
                <RootStack.Screen name="editExpense" component={EditExpenseScreen} options={{
                    headerShown: true,
                    swipeEnabled: true,
                    gestureEnabled: true,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#19678d'
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        // fontSize: 25,
                        // fontWeight: 'bold'
                    }
                }}/>
                <RootStack.Screen name="addCategory" component={AddCategoryScreen} options={{
                    headerShown: true,
                    swipeEnabled: true,
                    gestureEnabled: true,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#19678d'
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        // fontSize: 25,
                        // fontWeight: 'bold'
                    }
                }}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
export default RootStackNavigation;
