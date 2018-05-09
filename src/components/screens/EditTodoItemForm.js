import React from 'react';
import PropTypes from 'prop-types'
import EditTodoItemForm from '../relay/EditTodoItemForm'

export default EditTodoItemFormScreen = props => {
  return (
    <EditTodoItemForm
      itemId={props.itemId}
      title={props.title}
      description={props.description}
      completed={props.completed}
      done={() => {
        props.navigator.resetTo({
          screen: 'todoApp.TodoList',
          title: 'Todo list'
        })
      }}
    />
  );
}

EditTodoItemFormScreen.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool
}
