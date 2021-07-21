import React, {useState} from "react";
import {View, StyleSheet, Button, ActivityIndicator} from "react-native"
import { TextInput } from "react-native-gesture-handler";
import {widthPercentageToDP as wp} from "react-native-responsive-screen"
import {showToast} from '../../components/toast'
import {usePostTodo} from '../../server/'

export default function AddTodoScreen(){
    const [state, setState] = useState({title: '', description: ''})
    const {isLoading, mutateAsync }= usePostTodo()
  

    const handleTodo2 = async () =>{
       try {
          const response = await mutateAsync(state)
            console.log(response.data.payload)
            showToast(response.data.message)
        }
        catch(error){
            console.log(error)
        }
    }

    return <View>
        <TextInput placeholder = "Title" style ={styles.input} onChangeText= {(title) =>{
            setState({...state, title: title})
        }}/>
       <TextInput placeholder = "Enter Description" style ={styles.input} onChangeText = {(description) =>{
           setState({...state, description: description})
       }}/>
       <Button title = 'Submit' onPress={()=> {
            handleTodo2()
       }} color = "green"/>
       {isLoading? <ActivityIndicator color = "red"/>: null}
    </View>
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: "center", backgroundColor: "black"},
    input: {margin: wp('6%'), fontSize: wp(6), color: "black", borderRadius: 2, borderColor: "red"} 
})