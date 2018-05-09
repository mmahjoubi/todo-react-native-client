import { connect } from 'react-redux'
import { setVisibilityFilter, VisibilityFilters } from '../../reducers/listFilter/actions'
import TodoList from '../views/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_DONE:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_TO_BE_DONE:
      return todos.filter(t => !t.completed)
  }
}


const filtersMap = [
  VisibilityFilters.SHOW_ALL,
  VisibilityFilters.SHOW_DONE,
  VisibilityFilters.SHOW_TO_BE_DONE
]

const mapStateToProps = (state, ownProps) => {
  return {
    data: getVisibleTodos(ownProps.data, state.visibilityFilter),
    filterValue: filtersMap.indexOf(state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeFilter: (_, i) => {
      dispatch(setVisibilityFilter(filtersMap[i]))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
