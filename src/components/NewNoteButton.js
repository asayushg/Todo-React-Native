import React from 'react';
import { 
    View, 
    StyleSheet, 
    Image, 
    Text,
    TouchableOpacity, 
    ImageBackground, 
} from 'react-native';

const NewNoteButton = (props) => {

    return(
        <View style={styles.newNote}>
            <TouchableOpacity onPress={() => props.newNote()}>
                    <Image style={styles.icon} source={require('../assests/images/plus.png')} />
            </TouchableOpacity>
        </View>
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