import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import NewNoteButton from './src/components/NewNoteButton';
import NoteList from './src/components/NoteList';


export default function App() {
  
  const notes = [
    {id: 1, text: 'This is a todo note', type: 1},
    {id: 2, text: 'This is a todo note', type: 1},
    {id: 8, text: 'This is a completed note', type: 2},
    {id: 9, text: 'This is a completed note', type: 2},
  ]

  const [allNotes, setAllNotes] = useState(notes);
  const [refresh, setRefresh] = useState(true);

  return (
    <View style={styles.container}>

      <Header />

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
