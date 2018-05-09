import React from 'react';
import { Text } from 'react-native'
import { QueryRenderer, commitMutation, graphql } from 'react-relay'
import PropTypes from 'prop-types'
import env from '../../../Environment'
import TodoDetails from '../views/TodoDetails'

const query = graphql`
  query TodoDetailsQuery($id: ID!){
    todo(id: $id) {
      title
      description
      completed
    }
  }
`

const mutation = graphql`
  mutation TodoDetailsMutation($input: DeleteTodoInput!) {
    deleteTodo(input: $input) {
      deletedTodo {
        id
      }
    }
  }
`

export default TodoDetailsQueryRenderer = props => {
  return (
    <QueryRenderer
      environment={env}
      variables={{id: props.itemId}}
      query={query}
      render={
        ({error, props: res}) => {
          if (error) {
            return (<Text>Error occured.</Text>);
          } else if (res) {
            return (
              <TodoDetails
                {...res.todo}
                onEditPress={() => props.onEditPress({
                  itemId: props.itemId,
                  title: res.todo.title,
                  description: res.todo.description,
                  completed: res.todo.completed
                })}
                onDeletePress={() => {
                  commitMutation(
                    env,
                    {
                      mutation,
                      variables: { input: { todoId: props.itemId } },
                      onCompleted: (response, errors) => props.done(),
                      onError: err => console.error(err)
                    }
                  )
                }}
              />
            );
          }
          return (<Text>loading...</Text>);
        }
      }
    />
  );
}

TodoDetailsQueryRenderer.propTypes = {
  itemId: PropTypes.string.isRequired,
  onEditPress: PropTypes.func.isRequired,
  done: PropTypes.func.isRequired
}
