import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import FilterNotes from './FilterNotes';
import Note from './Note';

const NoteList = (props) =>{

    const [sortTypeSelected, setSortTypeSelected] = useState(0);
    const [notes, setNotes] = useState([]);
    console.log("list");
    console.log(props.allNotes);
    
    
    useEffect(() => {
        setNotes([]);
        if(sortTypeSelected === 0 ) setNotes(props.allNotes);
        else 
        setNotes( props.allNotes.filter( function (item){
            return item.type === sortTypeSelected;
        }
        ) )

        props.setRefresh(!props.refresh);
     }, [sortTypeSelected, props.allNotes])

     console.log(notes);

    return(
        <View style={styles.container}>
            <FilterNotes setSortTypeSelected={setSortTypeSelected}/>
            { notes.length === 0  ? <Text style= {{textAlign: 'center', marginTop: 100}}>No Todo Found! </Text>  : <></>}
            <View style={styles.noteList}>
                <FlatList 
                    data={notes}
                    renderItem={({item}) => {
                        return (
                            <Note 
                                text={item.text}
                                type={item.type}
                                allNotes={props.allNotes}
                                setAllNotes={props.setAllNotes}
                                refresh={props.refresh}
                                setRefresh={props.setRefresh} />
                        )
                    }}
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