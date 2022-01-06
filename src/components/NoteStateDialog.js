import React, { useState } from 'react';
import { View } from 'react-native';
import Dialog from "react-native-dialog";
import SaveTodoList from '../Utils';


const NoteStateDialog = (props) => {

    let note = props.note;
    let newState = 1;

    if(note.type ===1) newState = 2;
    else newState = 1;
    let btnText = "";

    if(note.type === 1){
        btnText = "Move to Completed";
    }else btnText = "Move to Todo";

    const handleCancel = () => {
        props.setVisible(false);
    };

    const handleOkay = () => {
        props.setVisible(false);
        let notes = props.allNotes;
        for(var i = 0; i < notes.length; i++) {
            if (notes[i].text === note.text && notes[i].type === note.type ) {
                notes[i].type = newState;
                break;
            }
        }

        props.setAllNotes(notes);
        props.setRefresh(!props.refresh);
        SaveTodoList(notes);

    };

    return (
        <View>
            <Dialog.Container visible={props.visible} statusBarTranslucent>
            <Dialog.Title>Move Todo</Dialog.Title>
            <Dialog.Description>Do you want to move this Todo to {note.type === 1 ? "Completed" : "Todo"}?</Dialog.Description>
            <Dialog.Button label="Cancel" onPress={handleCancel} />
            <Dialog.Button label={btnText} onPress={handleOkay} />
      </Dialog.Container>
        </View>
    )


}

export default NoteStateDialog;