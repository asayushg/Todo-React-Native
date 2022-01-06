import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import Dialog from "react-native-dialog";
import SaveTodoList from '../Utils';


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

        let found = false;
        for(var i = 0; i < notes.length; i++) {
            if (notes[i].text === newNote && notes[i].type === 1 ) {
                found = true;
                break;
            }
        }
        if(!found) {
            notes.push({
                text: newNote,
                type: 1
            });
            if(newNote) {
                props.setAllNotes(notes);
                props.setRefresh(!props.refresh);
                SaveTodoList(notes);
            }
        }else{
            alert("Todo already present");
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