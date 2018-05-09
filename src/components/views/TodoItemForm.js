import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import PropTypes from 'prop-types'
import CheckBox from 'react-native-check-box'
import styles from './styles/TodoItemForm'

class TodoItemForm extends React.Component {

  constructor(props) {
    super(props)
    props.onMount()
  }

  render() {
    const props = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Title:</Text>
        <TextInput
          maxLength={30}
          style={styles.titleBox}
          value={props.title}
          onChangeText={props.onChangeTitle}
        />
        <Text style={styles.header}>Details:</Text>
        <TextInput
          multiline={true}
          style={styles.descriptionBox}
          value={props.description}
          onChangeText={props.onChangeDescription}
        />
        {props.editCompletion && 
          <CheckBox
            style={styles.checkbox}
            onClick={props.onToggleCompletion}
            isChecked={props.completed}
            leftText={'Completed:'}
          />
        }
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.onSavePress({
            title: props.title,
            description: props.description,
            completed: props.completed
          })}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

TodoItemForm.propTypes = {
  ...View.propTypes,
  title: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool,
  onToggleCompletion: PropTypes.func,
  onSavePress: PropTypes.func.isRequired,
  editCompletion: PropTypes.bool
}

export default TodoItemForm
