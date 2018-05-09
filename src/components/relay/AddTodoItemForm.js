import React from 'react'
import { commitMutation, graphql } from 'react-relay'
import PropTypes from 'prop-types'
import env from '../../../Environment'
import TodoItemForm from '../containers/TodoItemForm'

const mutation = graphql`
  mutation AddTodoItemFormMutation($input: CreateTodoInput!){
    createTodo(input: $input) {
      createdTodo {
        id
      }
    }
  }
`

export default AddTodoItemForm = props => {
  return (
    <TodoItemForm onSavePress={payload => {
      commitMutation(
        env,
        {
          mutation,
          variables: {input: payload},
          onCompleted: (response, errors) => props.done(),
          onError: err => console.error(err)
        }
      )
    }}/>
  );
}

AddTodoItemForm.propTypes = {
  done: PropTypes.func.isRequired
}
