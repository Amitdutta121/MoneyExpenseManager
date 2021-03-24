import {createDrawerNavigator} from "@react-navigation/drawer";
import DashboardScreen from "../screens/Dashboard/DashboardScreen";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import CategoryScreen from "../screens/Category/CategoryScreen";
import AddExpenseScreen from "../screens/Expense/AddExpenseScreen";
import ExpenseListScreen from "../screens/Expense/ExpenseListScreen";
import React from "react";
import {HEADER_COLOR} from "../Theme/Constant";

const Drawer = createDrawerNavigator();

function DrawerStack() {
    return (
        <Drawer.Navigator
            initialRouteName="dashboard"
            drawerPosition='left'
            drawerType="front"
            edgeWidth={100}
            hideStatusBar={false}
            overlayColor='#00000090'
            drawerStyle={{
                backgroundColor: '#e6e6e6',
                width: 300,
            }}
            screenOptions={{
                headerShown: true,
                swipeEnabled: true,
                gestureEnabled: true,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: HEADER_COLOR
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    // fontSize: 25,
                    // fontWeight: 'bold'
                }
            }}
        >
            <Drawer.Screen
                name="dashboard"
                component={DashboardScreen}
                options={{
                    title: 'Dashboard',
                    drawerIcon: ({ focused }) => (
                        <FontAwesome5
                            name="home"
                            size={focused ? 25 : 20}
                            color={focused ? '#0080ff' : '#999999'}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="manageCategory"
                component={CategoryScreen}
                options={{
                    title: 'Manage Category',
                    drawerIcon: ({ focused }) => (
                        <FontAwesome5
                            name="list-alt"
                            size={focused ? 25 : 20}
                            color={focused ? '#0080ff' : '#999999'}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="addExpense"
                component={AddExpenseScreen}
                options={{
                    title: 'Add Expense',
                    drawerIcon: ({ focused }) => (
                        <FontAwesome5
                            name="btc"
                            size={focused ? 25 : 20}
                            color={focused ? '#0080ff' : '#999999'}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="expenseList"
                component={ExpenseListScreen}
                options={{
                    title: 'Manage Expense',
                    drawerIcon: ({ focused }) => (
                        <FontAwesome5
                            name="list"
                            size={focused ? 25 : 20}
                            color={focused ? '#0080ff' : '#999999'}
                        />
                    )
                }}
            />

        </Drawer.Navigator>
    )
}
export default DrawerStack;
