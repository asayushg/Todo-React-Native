import React from 'react';
import { 
    View,
    Text, 
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


const Note = (props) => {


    const handleNotePressed = () =>{
        

        
    }


    return (
        <TouchableOpacity style={styles.card} onPress={handleNotePressed}>
            <Text style={styles.text}>{props.text}</Text>
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
    },

    text:{
        textAlign:'left',
        fontSize: 14
    }

})