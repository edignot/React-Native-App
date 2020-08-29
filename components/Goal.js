import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Goal = (props) => {
  return (
    <View style={styles.goal}>
      <Text>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    backgroundColor: '#eee',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
  },
})

export default Goal
