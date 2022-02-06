import React from 'react'
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
  skill: String;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}>
      <Text
        style={styles.textSkill}
        {...rest}
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
    padding: 13,
    alignItems: 'center',
    marginVertical: 7,
  },
  textSkill: {
    color: '#ADD8E6',
    fontSize: 18,
    fontWeight: 'bold'
  }
})