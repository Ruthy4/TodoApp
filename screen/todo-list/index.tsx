import React, { useState } from 'react'
import { FlatList, Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { useRecoilState } from 'recoil'
import { todoState } from "../../store/todo"
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useFetchTodos, useDeleteTodos } from '../../server'
import axios from 'axios';
import { END_POINT } from '../../constants';
import showToast from '../../components/toast';


interface PropType { }



export default function TodoList({navigation, route}) {
  const { data, isLoading } = useFetchTodos()
  const { mutateAsync } = useDeleteTodos()


  const deleteTodos = async (title: string) => {
    try {
      const response = await mutateAsync(title)
      console.log(response.data?.payload)
      showToast(response.data.message)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (<View style={styles.container}>

<Text style={styles.title}>Today's Task</Text>

    <FlatList
      contentContainerStyle={[styles.contentContainer]}
      data={data?.data.payload}
      // console.log(data.payload)
      keyExtractor={(ITodo) => ITodo.title}
      renderItem={(renderTodo) => {
        return <View style={styles.itemContainer} >

          <View style = {styles.itemContent}>
          <Text style={styles.itemTitle} >{renderTodo.item.title}</Text>
          <Text style ={styles.item}>{renderTodo.item.description}</Text>
          </View>
          
          
          <View style={styles.actionStyle}>

            <Feather name="edit" size={wp('10%')} color="green" onPress = {() => {
              navigation.push("EditScreen", renderTodo.item)
            }}/>
            <MaterialIcons name="delete" size={wp('10%')} color="red" justifyContent="flex-end" onPress={() => {
              deleteTodos(renderTodo.item.title)
            }} />
          </View>
        </View>
      }}
      ListEmptyComponent={() => isLoading ? <ActivityIndicator color='red' /> : <Text style={{ marginTop: wp('6%'), fontSize: wp('6%') }}>Empty list</Text>} />
  </View>)
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 12,
    backgroundColor: '#ccc'
  },
  contentContainer: {
    flex: 1,
    elevation: 12,
    alignItems: "center",
  },
  item: {
    fontSize: wp(5),
    width: wp(70),
    color:"black",
    textAlign: "left",
    textTransform: "capitalize"
  },
  itemTitle: {
    fontSize: wp(5),
    fontWeight: "bold",
    width: wp(70),
    textAlign: "left",
    textTransform: "capitalize"
  },
  title: {
    fontSize: wp(6),
    fontWeight: "bold",
    width: wp(70),
    margin: wp(5),
    justifyContent: "space-around",
    textAlign: "left",
    textTransform: "capitalize"
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: 'white',
    width: wp(95),
    borderRadius: 5,
    marginTop: wp('6%'),
    elevation: 12,
    padding: 10
  },
  actionStyle: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    width: wp(22)
  },
  itemContent: {
    flexDirection: "column",
    justifyContent: 'flex-end',
    width: wp(70)
  }
})

function mutateAsync(state: any) {
  throw new Error('Function not implemented.');
}
function state(state: any) {
  throw new Error('Function not implemented.');
}

