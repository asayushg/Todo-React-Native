import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import NewNoteButton from './src/components/NewNoteButton';
import NoteList from './src/components/NoteList';


export default function App() {
  
  const notes = [
    {id: 1, text: 'This is a note'},
    {id: 2, text: 'This is a note'},
    {id: 3, text: 'This is a note'},
    {id: 4, text: 'This is a note'},
    {id: 5, text: 'This is a note'},
    {id: 6, text: 'This is a note'},
    {id: 7, text: 'This is a note'},
    {id: 8, text: 'This is a note'},
    {id: 9, text: 'This is a note'},
    {id: 9, text: 'This is a note'},
    {id: 9, text: 'This is a note'},
    {id: 9, text: 'This is a note'},
    {id: 9, text: 'This is a note'},
  ]

  return (
    <View style={styles.container}>

      <Header />

      <NewNoteButton
      newNote={() =>{
        alert("New Note")
      }} />

      <NoteList
        notes={notes} 
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
