import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text
        style={styles.textSkill}
      >
        {skill}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1C1C1C',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  textSkill: {
    color: '#ADD8E6',
    fontSize: 22,
    fontWeight: 'bold'
  }
})