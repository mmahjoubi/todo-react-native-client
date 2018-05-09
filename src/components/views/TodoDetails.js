import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles/TodoDetails'

const TodoDetails = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Title:</Text>
      <Text style={styles.titleBox}>{props.title}</Text>
      <Text style={styles.header}>Details:</Text>
      <ScrollView style={styles.descriptionBox}>
        <Text>{props.description}</Text>
      </ScrollView>
      <View style={styles.statusContainer}>
        <Text>Status:</Text>
        <Text>{props.completed ? 'Completed' : 'Not completed'}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={props.onEditPress}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.onDeletePress}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

TodoDetails.propTypes = {
  ...View.propTypes,
  title: PropTypes.string,
  description: PropTypes.string,
  completed: PropTypes.bool,
  onEditPress: PropTypes.func,
  onDeletePress: PropTypes.func
}

export default TodoDetails
