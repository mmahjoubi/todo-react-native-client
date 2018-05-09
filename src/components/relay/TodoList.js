import React from 'react';
import { Text } from 'react-native'
import { QueryRenderer, graphql } from 'react-relay'
import PropTypes from 'prop-types'
import env from '../../../Environment'
import TodoList from '../containers/TodoList'

const query = graphql`
  query TodoListQuery {
    todos {
      key: id
      title
      completed
    }
  }
`

export default TodoListQueryRenderer = props => {
  return (
    <QueryRenderer
      environment={env}
      query={query}
      render={
        ({error, props: res}) => {
          if (error) {
            return (<Text>Error occured.</Text>);
          } else if (res) {
            return (<TodoList data={res.todos} {...props}/>);
          }
          return (<Text>loading...</Text>);
        }
      }
    />
  );
}

TodoListQueryRenderer.propTypes = {
  onItemPress: PropTypes.func,
  onAddNewItemPress: PropTypes.func
}
