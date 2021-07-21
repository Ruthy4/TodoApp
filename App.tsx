import { StatusBar } from 'expo-status-bar';
import React from 'react';
import TodoList from './screen/todo-list';
import { StyleSheet, Text, View } from 'react-native';
import {QueryClientProvider, QueryClient} from 'react-query'
import {RecoilRoot} from 'recoil'
import AppNavigator from './navigation';

const queryClient = new QueryClient
export default function App() {
  return (
    <QueryClientProvider client= {queryClient}>
        <RecoilRoot>
           <AppNavigator/>
        </RecoilRoot>
    </QueryClientProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
