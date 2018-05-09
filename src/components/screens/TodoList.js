import React from 'react';
import TodoList from '../relay/TodoList'

export default props => {
  return (
    <TodoList
      onItemPress={(itemId) => props.navigator.push({
        screen: 'todoApp.TodoDetails',
        title: 'Todo details',
        passProps: { itemId }
      })}
      onAddNewItemPress={() => props.navigator.push({
        screen: 'todoApp.AddTodoItemForm',
        title: 'Add new Todo'
      })}
    />
  );
}
