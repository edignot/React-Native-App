import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  const [outputText, setOutputText] = useState('Change this text')

  return (
    // VIEW IS A CONTAINER COMPONENT (like div or section )
    // CANNOT PUT TEXT IN A VIEW WITHOUT TEXT WRAPPER
    <View>
      <View></View>
      <View></View>
      <Text>{outputText}</Text>
      <StatusBar style='error' />
      <Button title='Hi' onPress={() => setOutputText('Changed')} />
    </View>
  )
}
