import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from 'react-native'

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
        <Button title='Add' style={styles.addBtn} onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {goals.map((goal) => (
          <View key={goal}>
            <Text style={styles.goal}>{goal}</Text>
          </View>
        ))}
      </ScrollView>
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
    borderColor: '#ddd',
    borderWidth: 1,
    flex: 1,
    padding: 10,
  },
  goal: {
    padding: 10,
    backgroundColor: '#eee',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
  },
  addBtn: {},
})
