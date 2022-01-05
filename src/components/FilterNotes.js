import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const FilterNotes = () => {

    return (
        <Pressable 
            style={styles.container}
            onPress={() => {
                alert("Select Sort")
            }}
        >
            <Text>All Todo</Text>
            <Image 
            source={require('../assests/images/arrowdown.png')} 
            style={styles.icon}/>
        </Pressable>
    )

}

export default FilterNotes;

const styles = StyleSheet.create({

    container:{
        marginStart: '5%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 8,
        marginBottom: 8
    },

    icon:{
        height: 16,
        width: 16,
        tintColor: 'black',
        marginStart: 8
    }


})