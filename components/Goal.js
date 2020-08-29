import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  // TOUCHABLE COMPONENTS
  // wrapper to make components touchable, different touchable versions
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native'

const Goal = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onDelete(props.id)}
      activeOpacity={0.6}
    >
      <View style={styles.goal}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
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
