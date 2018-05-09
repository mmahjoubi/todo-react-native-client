import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation';
import { createStore } from "redux"
import { Provider } from 'react-redux'
import reducer from './src/reducers'
import TodoDetails from './src/components/screens/TodoDetails'
import TodoList from './src/components/screens/TodoList'
import AddTodoItemForm from './src/components/screens/AddTodoItemForm'
import EditTodoItemForm from './src/components/screens/EditTodoItemForm'

const store = createStore(reducer)

Navigation.registerComponent('todoApp.TodoList', () => TodoList, store, Provider)
Navigation.registerComponent('todoApp.TodoDetails', () => TodoDetails, store, Provider)
Navigation.registerComponent('todoApp.AddTodoItemForm', () => AddTodoItemForm, store, Provider)
Navigation.registerComponent('todoApp.EditTodoItemForm', () => EditTodoItemForm, store, Provider)

Navigation.startSingleScreenApp({
  screen: {
    screen: 'todoApp.TodoList',
    title: 'Todo list'
  }
})
