
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CategoryScreen from "./screens/Category/CategoryScreen";
import AddExpenseScreen from "./screens/Expense/AddExpenseScreen";
import ExpenseListScreen from "./screens/Expense/ExpenseListScreen";
import {createStackNavigator} from "@react-navigation/stack";
import EditExpenseScreen from "./screens/Expense/EditExpenseScreen";


const Drawer = createDrawerNavigator();
const ExpenseStack = createStackNavigator();
const RootStack = createStackNavigator();


const navOptionHandler = () => ({
    headerShown: false
})

function App() {
  return (
      <Drawer.Navigator
        initialRouteName="Screen_A"
        drawerPosition='left'
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor='#00000090'
        drawerStyle={{
          backgroundColor: '#e6e6e6',
          width: 250
        }}
        screenOptions={{
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
        }}
      >
        <Drawer.Screen
          name="Screen_A"
          component={ScreenA}
          options={{
            title: 'Screen_A'
            // drawerIcon: ({ focused }) => (
            //   <FontAwesome5
            //     name="autoprefixer"
            //     size={focused ? 25 : 20}
            //     color={focused ? '#0080ff' : '#999999'}
            //   />
            // )
          }}
        />
        <Drawer.Screen
          name="manageCategory"
          component={CategoryScreen}
          options={{
            title: 'Manage Category'
            // drawerIcon: ({ focused }) => (
            //   <FontAwesome5
            //     name="btc"
            //     size={focused ? 25 : 20}
            //     color={focused ? '#0080ff' : '#999999'}
            //   />
            // )
          }}
        />
          <Drawer.Screen
              name="addExpense"
              component={AddExpenseScreen}
              options={{
                  // title: 'Add Expense'
                  // drawerIcon: ({ focused }) => (
                  //   <FontAwesome5
                  //     name="btc"
                  //     size={focused ? 25 : 20}
                  //     color={focused ? '#0080ff' : '#999999'}
                  //   />
                  // )
              }}
          />

          <Drawer.Screen
              name="expenseList"
              component={ExpenseListScreen}
              options={{
                  title: 'Manage Expense'
                  // drawerIcon: ({ focused }) => (
                  //   <FontAwesome5
                  //     name="btc"
                  //     size={focused ? 25 : 20}
                  //     color={focused ? '#0080ff' : '#999999'}
                  //   />
                  // )
              }}
          />

      </Drawer.Navigator>
  )
}

const RootNavigation = ()=>{
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="launchPage" component={App} options={navOptionHandler}/>
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
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;
