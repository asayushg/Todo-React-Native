import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FilterNotes = () => {

    return (
        <View style={styles.container}>
            <Text>All Todo</Text>
        </View>
    )

}

export default FilterNotes;

const styles = StyleSheet.create({

    container:{
        margin: 8,
        marginStart: '5%'
    }

})