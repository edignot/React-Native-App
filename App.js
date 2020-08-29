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
  const [goals, setGoals] = useState([])

  const addGoalHandler = (enteredGoal) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ])
  }

  const removeGoalHandler = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <View style={{ padding: 50 }}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => (
          <Goal
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({})
