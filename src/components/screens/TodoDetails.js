import React from 'react';
import PropTypes from 'prop-types'
import TodoDetails from '../relay/TodoDetails'

export default TodoDetailsScreen = props => {
  return (
    <TodoDetails
      itemId={props.itemId}
      onEditPress={editProps => props.navigator.push({
        screen: 'todoApp.EditTodoItemForm',
        title: 'Edit Todo',
        passProps: { ...editProps }
      })}
      done={() => {
        props.navigator.resetTo({
          screen: 'todoApp.TodoList',
          title: 'Todo list'
        })
      }}
    />
  );
}

TodoDetailsScreen.propTypes = {
  itemId: PropTypes.string.isRequired
}
