import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Picker
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles/TodoList'

export default TodoList = props => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={props.filterValue}
        onValueChange={props.onChangeFilter}>
        <Picker.Item label='Filter: None' value={0} />
        <Picker.Item label='Filter: Done' value={1} />
        <Picker.Item label='Filter: To be done' value={2} />
      </Picker>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.seperator}/>}
        data={props.data}
        renderItem={({item}) =>
          <TouchableOpacity onPress={() => props.onItemPress(item.key)}>
            <View style={styles.listItemContainer}>
              <Text
                numberOfLines={1}
                style={[styles.listItemText, {width: item.completed ? '80%': '100%'}]}
              >
                {item.title}
              </Text>
              {item.completed && <Text style={styles.listItemText}>DONE</Text>}
            </View>
          </TouchableOpacity>
        }
      />
      <TouchableOpacity onPress={props.onAddNewItemPress}>
        <Text style={styles.addButtonText}>Add new Todo item</Text>
      </TouchableOpacity>
    </View>
  )
}

TodoList.propTypes = {
  ...View.propTypes,
  filterValue: PropTypes.number,
  onChangeFilter: PropTypes.func,
  onItemPress: PropTypes.func,
  onAddNewItemPress: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool
  }))
}
