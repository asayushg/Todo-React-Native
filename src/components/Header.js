import React from "react";
import { View, Text, StyleSheet } from "react-native";


const Header = (props) => {

    let total = 0;
    let todo = 0;

    total = props.allNotes.length;
    todo = props.allNotes.filter( function (item){
        return item.type === 1;
    }).length;


    return( 
        <View style={styles.header}>
            <Text style={styles.text}>All Tasks</Text>
            <View style={styles.card}>
            <View>
                    <Text style={styles.tasknum}>{total}</Text>
                    <Text style={styles.tasktype}>All</Text>
                </View>
                <View>
                    <Text style={styles.tasknum}>{total - todo}</Text>
                    <Text style={[styles.tasktype, {borderBottomColor: 'green', borderBottomWidth: 4}]}>Completed</Text>
                </View>
                <View>
                    <Text style={styles.tasknum}>{todo}</Text>
                    <Text style={[styles.tasktype, {borderBottomColor: 'skyblue', borderBottomWidth: 4}]}>Todo</Text>
                </View>
            </View>
        </View>
    )

}

export default Header;


const styles = StyleSheet.create({

    header:{
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingTop:40,
        paddingBottom: 80,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },

    text:{
        fontSize: 24,
        color:'black',
        fontWeight: '600',
        color:'white',
        textAlign:'center'
    },

    card:{
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-evenly',
        position:'absolute',
        top: 80
    },

    tasknum:{
        fontSize: 24,
        color:'black',
        fontWeight: '600',
        textAlign:'center'
    },

    tasktype:{
        fontSize: 16,
        color:'black',
        fontWeight: '300',
        textAlign:'center',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    }

})