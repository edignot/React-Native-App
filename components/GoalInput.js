import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    props.addGoal(enteredGoal)
    setEnteredGoal('')
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' style={styles.addBtn} onPress={addGoalHandler} />
        <Button title='CANCEL' color='red' onPress={props.cancelGoal} />
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  addBtn: {},
})
