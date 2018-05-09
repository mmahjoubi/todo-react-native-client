import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  header: {
    backgroundColor: 'grey',
    color: 'white',
    textAlign: 'center',
    height: 30,
    lineHeight: 30
  },
  button: {
    width: '50%'
  },
  editButtonText: {
    backgroundColor: 'black',
    color: 'white',
    lineHeight: 40,
    textAlign: 'center'
  },
  deleteButtonText: {
    backgroundColor: '#8b0101',
    color: 'white',
    lineHeight: 40,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    margin: '5%',
    marginTop: '20%'
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'row',
    width: '100%'
  },
  statusContainer: {
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderTopWidth: 0
  },
  titleBox: {
    borderColor: 'black',
    borderWidth: 1,
    height: '15%',
    padding: 10
  },
  descriptionBox: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
})
