import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  return (
    <View style={styles.screen}>
      <TextInput
        placeholder='Goal'
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        title='Add'
        style={styles.addBtn}
        onPress={() => props.addGoalHandler(enteredGoal)}
      />
    </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    flex: 1,
    padding: 10,
    marginBottom: 10,
  },
  addBtn: {},
})
