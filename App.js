import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import NewNoteButton from './src/components/NewNoteButton';
import NoteList from './src/components/NoteList';



export default function App() {

  const [allNotes, setAllNotes] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    
    AsyncStorage.getItem("TODO")
    .then(stringifiedTodos => {
      const parsedTodos = JSON.parse(stringifiedTodos);
      if (!parsedTodos || typeof parsedTodos !== 'object') return;
      setAllNotes(parsedTodos);
    })
    .catch(err => {
      console.warn('Error restoring todos from async');
      console.warn(err);
    });

  }, [])

  return (
    <View style={styles.container}>

      <Header allNotes={allNotes} />

      <NewNoteButton 
      allNotes={allNotes}
      setAllNotes={setAllNotes}
      refresh={refresh}
      setRefresh={setRefresh} />

      <NoteList
        allNotes={allNotes}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    width: '100%'
  },
});
