import React, {useState} from 'react';
import { 
    View,
    Text, 
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import NoteStateDialog from './NoteStateDialog';


const Note = (props) => {

    const [visible, setVisible] = useState(false);

    const handleNotePressed = () =>{
        setVisible(true)
    }

    let typeColor = 'skyblue';
    if(props.type === 2) typeColor = 'green';

    return (
        <TouchableOpacity style={[styles.card, {borderRightColor: typeColor}]} onPress={handleNotePressed}>
            <Text style={styles.text}>{props.text}</Text>
            <NoteStateDialog 
                visible={visible}
                setVisible={setVisible}
                allNotes={props.allNotes}
                setAllNotes={props.setAllNotes} 
                refresh={props.refresh}
                setRefresh={props.setRefresh}
                note={
                    {
                        text: props.text,
                        type: props.type
                    }    
                }
            />
        </TouchableOpacity>
    )

}

export default Note;

const styles = StyleSheet.create({

    card:{
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.26,
        elevation: 4,
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        marginLeft: '5%',
        marginRight: '5%',
        flexDirection:'row',
        marginBottom: 8,
        borderRightWidth: 10
    },

    text:{
        textAlign:'left',
        fontSize: 14
    }

})