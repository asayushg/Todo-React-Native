import React, { useState } from 'react';
import { View } from 'react-native';
import Dialog from "react-native-dialog";

const NewNoteDialog = (props) => {


    const [newNote, setNewNote] = useState('');

    const handleCancel = () => {
        props.setVisible(false);
    };

    const handleInput = (text) => {
        setNewNote(text)
    };

    const handleOkay = () => {
        props.setVisible(false);
        let notes = props.allNotes;
        notes.push({
            id: 6,
            text: newNote,
            type: 1
        });
       if(newNote) {
           props.setAllNotes(notes);
           props.setRefresh(!props.refresh)
       }
    };

    return (
        <View>
            <Dialog.Container visible={props.visible} statusBarTranslucent>
            <Dialog.Title>Todo</Dialog.Title>
            <Dialog.Description>Enter the Todo Task here.</Dialog.Description>
            <Dialog.Input onChangeText={(text) => handleInput(text)} />
            <Dialog.Button label="Cancel" onPress={handleCancel} />
            <Dialog.Button label="Okay" onPress={handleOkay} />
      </Dialog.Container>
        </View>
    )


}

export default NewNoteDialog;