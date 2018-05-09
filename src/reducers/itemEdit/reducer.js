import {
  EDIT_TITLE,
  EDIT_DESCRIPTION,
  TOGGLE_COMPLETION,
  RESET_FIELDS
} from './actions'

export default itemEditor = (state = {}, action) => {
  switch (action.type) {
    case EDIT_TITLE:
      return { ...state, title: action.title }
    case EDIT_DESCRIPTION:
      return { ...state, description: action.description }
    case TOGGLE_COMPLETION:
      return { ...state, completed: !state.completed }
    case RESET_FIELDS:
      return {}
    default:
      return state
  }
}
