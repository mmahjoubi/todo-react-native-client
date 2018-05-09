import { connect } from 'react-redux'
import {
  editTitle,
  editDescription,
  resetFields,
  toggleCompletion
} from '../../reducers/itemEdit/actions'
import TodoItemForm from '../views/TodoItemForm'

const mapStateToProps = state => {
  return { ...state.itemEditor }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeTitle: text => {
      dispatch(editTitle(text))
    },
    onChangeDescription: text => {
      dispatch(editDescription(text))
    },
    onToggleCompletion: () => {
      dispatch(toggleCompletion())
    },
    onMount: () => {
      dispatch(resetFields())
      ownProps.titleInitVal && dispatch(editTitle(ownProps.titleInitVal))
      ownProps.descriptionInitVal & dispatch(editDescription(ownProps.descriptionInitVal))
      ownProps.completedInitVal && dispatch(toggleCompletion())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemForm)
