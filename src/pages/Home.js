import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList
} from 'react-native'

import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])
  const [greeting, setGreeting] = useState('')

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill])
    setNewSkill('')
  }

  useEffect(() => {
    const currentHour = new Date().getHours()
    
    if(currentHour < 12) {
      setGreeting('Good morning')
    } else if(currentHour >=12 && currentHour <18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good evening')
    }

  }, [])

  return (
    <View style={styles.container}>
      <Text
        style={styles.title}
      >
        Welcome, Lílian
      </Text>

      <Text style={styles.greetings}>
        {greeting}!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#A9A9A9"
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text
        style={[styles.title, { marginVertical: 30 }]}
      >
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
        )}
      />

      {/* Subtituído por FlatList */}
      {/* <ScrollView showsVerticalScrollIndicator={false}>
      {
        mySkills.map(skill => (
          <SkillCard skill={skill} key={skill} />
        ))
      }
      </ScrollView> */}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#B0E0E6',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1C1C1C',
    color: '#FFFAFA',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greetings: {
    color: '#483D8B',
  }
})