import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import FilterNotes from './FilterNotes';
import Note from './Note';

const NoteList = (props) =>{

    const [sortTypeSelected, setSortTypeSelected] = useState(0);
    const [notes, setNotes] = useState([]);
    console.log(props.allNotes);
     useEffect(() => {

        if(sortTypeSelected === 0) setNotes(props.allNotes)
        else 
        setNotes( props.allNotes.filter( function (item){
            return item.type === sortTypeSelected;
        }
        ) )
     }, [sortTypeSelected])

    return(
        <View style={styles.container}>
            <FilterNotes setSortTypeSelected={setSortTypeSelected}/>
            <View style={styles.noteList}>
                <FlatList 
                    data={notes}
                    renderItem={({item}) => {
                        return (
                            <Note text={item.text} />
                        )
                    }}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    extraData={props.refresh}
                />
            </View>
        </View>
    )
}

export default NoteList;

const styles = StyleSheet.create({

    container:{
        flex: 1,
        marginTop: 60
    },

    noteList:{
       flex: 1,
    }

})