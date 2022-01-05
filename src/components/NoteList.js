import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import FilterNotes from './FilterNotes';
import Note from './Note';

const NoteList = (props) =>{

    console.log(props.notes);

    return(
        <View style={styles.container}>
            <View style={styles.filter}>
                <FilterNotes />
            </View>
            <View style={styles.noteList}>
                <FlatList 
                    data={props.notes}
                    renderItem={({item}) => {
                        return (
                            <Note text={item.text} />
                        )
                    }}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default NoteList;

const styles = StyleSheet.create({

    container:{
        flex: 1,
        marginTop: 60,
        marginBottom: 16,
    },

    filter:{
        flexDirection:'row',
        justifyContent:'flex-start',
    },

    noteList:{
       flex: 1,
    }

})