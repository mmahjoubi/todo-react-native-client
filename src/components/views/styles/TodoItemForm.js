import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  checkbox: {
    borderColor: 'black',
    borderWidth: 1,
    borderTopWidth: 0,
    padding: '5%'
  },
  header: {
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
    height: 30,
    lineHeight: 30
  },
  button: {
    width: '100%'
  },
  saveButtonText: {
    backgroundColor: 'black',
    color: 'white',
    lineHeight: 40,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    margin: '5%'
  },
  titleBox: {
    borderColor: 'black',
    borderWidth: 1,
    height: '10%',
    minHeight: 50,
    padding: 10
  },
  descriptionBox: {
    borderColor: 'black',
    borderWidth: 1,
    height: '30%',
    padding: 10
  }
})
