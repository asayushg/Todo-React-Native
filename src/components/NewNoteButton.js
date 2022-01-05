import React, {useState} from 'react';
import { 
    StyleSheet, 
    Image, 
    TouchableOpacity,
} from 'react-native';
import NewNoteDialog from './NewNoteDialog';

const NewNoteButton = (props) => {

    const [visible, setVisible] = useState(false);

    return(
        <TouchableOpacity style={styles.newNote} onPress={() => 
            setVisible(true)}>
            <Image style={styles.icon} source={require('../assests/images/plus.png')} />
            <NewNoteDialog 
            visible={visible}
            setVisible={setVisible}
            allNotes={props.allNotes}
            setAllNotes={props.setAllNotes} 
            refresh={props.refresh}
            setRefresh={props.setRefresh}
             />
        </TouchableOpacity>
    )

}

export default NewNoteButton;

const styles = StyleSheet.create({

    newNote:{
        position:'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'skyblue',
        width: 60,  
        height: 60,   
        borderRadius: 120, 
        alignItems: 'center',
        justifyContent: 'center',
        color:'white',
        zIndex: 100,
    },

    icon:{
        height: 25,
        width: 25,
        tintColor: 'white'
    }

})