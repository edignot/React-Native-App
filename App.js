import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [goals, setGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, enteredGoal])
  }
  return (
    <View style={{ padding: 50 }}>
      <View style={styles.screen}>
        <TextInput
          placeholder='Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='Add' style={{ flex: 2 }} onPress={addGoalHandler} />
      </View>
      <View>
        {goals.map((goal) => (
          <Text>{goal}</Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    flex: 1,
  },
})
