import { combineReducers } from 'redux'
import visibilityFilter from './listFilter/reducer'
import itemEditor from './itemEdit/reducer'

export default combineReducers({
  visibilityFilter,
  itemEditor
})
