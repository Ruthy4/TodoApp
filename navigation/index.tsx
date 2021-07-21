import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import { Screens} from '../screens'
import {Ionicons} from '@expo/vector-icons'

const TodoStack = createStackNavigator()
export default function AppNavigator(){
    return(
        <NavigationContainer>
            <TodoStack.Navigator mode = "modal">
                <TodoStack.Screen 
                name = 'TodoListScreen' component ={Screens.TodoListScreen}
                options = {(data) => ({
                    headerTitle: 'TodoList',
                    headerRight: () => (
                        <Ionicons name = "add-circle-sharp" size = {40} marginRight ={10} color = "green" onPress={() =>{
                               data.navigation.push("AddTodoScreen")
                        }

                        }/>
                    )
                })}/>
                <TodoStack.Screen
                name = 'AddTodoScreen' component ={Screens.AddTodoScreen}
                options = {{
                    headerTitle: 'AddTodoScreen',
                    // headerLeft: () => (
                    //     <Ionicons name = "add-circle-sharp" size={40} marginRight = {10} color = "green"
                    // )
                }}

                />
                <TodoStack.Screen
                    name = 'EditScreen' component = {Screens.EditScreen}
                    options = {{ 
                        headerTitle: 'EditScreen'
                    }}
                />
            </TodoStack.Navigator>
        </NavigationContainer>
    )
}