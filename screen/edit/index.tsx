import React, {useState} from "react";
import {View, StyleSheet, Button, ActivityIndicator} from "react-native"
import { TextInput } from "react-native-gesture-handler";
import {widthPercentageToDP as wp} from "react-native-responsive-screen"
import {useEditTodos} from '../../server'
import {showToast} from '../../components/toast'

export default function editScreen({route}){
    const {title, description} = route.params
    const [state, setState] = useState({title: title, description: description})
    const {isLoading, mutateAsync }= useEditTodos()

    const editList = async()=>{
        try{
             const response = await mutateAsync({...state, titleToUpdate:title})
             showToast(response.data.message)
        } catch{
            console.log("error")
        }
    }
    
return <View>
        <TextInput placeholder = "Title" style ={styles.input} onChangeText= {(title) =>{
            setState({...state, title: title})
        }}
        value = {state.title}
        />
       <TextInput placeholder = "Enter Description" style ={styles.input} onChangeText = {(description) =>{
           setState({...state, description: description})
       }}
       value = {state.description}
       />
       <Button title = 'Update' onPress={()=> {
            editList()
       }} color = "blue"/>
       {/* {isLoading? <ActivityIndicator color = "red"/>: null} */}
    </View>
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: "center", backgroundColor: "black"},
    input: {margin: wp('6%'), fontSize: wp(6), color: "black", borderRadius: 2, borderColor: "red"} 
})