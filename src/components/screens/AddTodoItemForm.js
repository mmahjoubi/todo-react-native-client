import React from 'react';
import AddTodoItemForm from '../relay/AddTodoItemForm'

export default props => {
  return (
    <AddTodoItemForm done={() =>
      props.navigator.resetTo({
        screen: 'todoApp.TodoList',
        title: 'Todo list'
      })
    }/>
  )
}
