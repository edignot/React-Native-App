import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  // wrap scrollable area, for limited amount of items
  ScrollView,
  // expects array of object, where every object has a key property. For long lists, better performance than scrollList
  FlatList,
} from 'react-native'
import Goal from './components/Goal'
import GoalInput from './components/GoalInput'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [goals, setGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ])
  }
  return (
    <View style={{ padding: 50 }}>
      <GoalInput
        goalInputHandler={goalInputHandler}
        enteredGoal={enteredGoal}
        addGoalHandler={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => <Goal title={itemData.item.value} />}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({})
