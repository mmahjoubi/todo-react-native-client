import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    height: 1,
    backgroundColor: 'black',
    width: '100%'
  },
  listItemContainer: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row',
  },
  listItemText: {
    backgroundColor: 'white',
    color: 'black',
    lineHeight: 50,
    textAlign: 'left',
    padding: 10,
    width: '20%'
  },
  addButtonText: {
    backgroundColor: 'grey',
    color: 'white',
    lineHeight: 50,
    textAlign: 'center'
  }
})
