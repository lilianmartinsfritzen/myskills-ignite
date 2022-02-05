import React from 'react'
import { 
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

export function Button({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text
        style={styles.buttonText}
      >
        Add
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#483D8B',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#FFFAFA',
    fontSize: 17,
    fontWeight: 'bold'
  }
})