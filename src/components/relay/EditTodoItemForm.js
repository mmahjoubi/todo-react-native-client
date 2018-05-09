import React from 'react'
import { commitMutation, graphql } from 'react-relay'
import PropTypes from 'prop-types'
import env from '../../../Environment'
import TodoItemForm from '../containers/TodoItemForm'

const mutation = graphql`
  mutation EditTodoItemFormMutation($input: EditTodoInput!){
    editTodo(input: $input) {
      editedTodo {
        id
      }
    }
  }
`

export default EditTodoItemForm = props => {
  return (
    <TodoItemForm
      titleInitVal={props.title}
      descriptionInitVal={props.description}
      completedInitVal={props.completed}
      editCompletion={true}
      onSavePress={(payload) => {
        commitMutation(
          env,
          {
            mutation,
            variables: { input: { ...payload, todoId: props.itemId } },
            onCompleted: (response, errors) => props.done(),
            onError: err => console.error(err)
          }
        )
      }}
    />
  );
}

EditTodoItemForm.propTypes = {
  itemId: PropTypes.string.isRequired,
  done: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool
}
