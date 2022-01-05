import React from 'react';
import { StyleSheet, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const FilterNotes = ({setSortTypeSelected}) => {

    const sortTypes = ["ALL", "TODO", "COMPLETED"];
    
    return (
        <View style={styles.container}>
        <SelectDropdown
            data={sortTypes}
            onSelect={(selectedItem, index) => {
                setSortTypeSelected(index);
            }}
            defaultValueByIndex={0}
            buttonStyle={styles.dropdownBtnStyle}
            buttonTextStyle={styles.dropdownBtnTxtStyle}
            dropdownStyle={styles.dropdown}
            buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }
            }
            rowTextForSelection={(item, index) => {
                    return item
                }
            }
        />
        </View>
    )

}

export default FilterNotes;

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        width: '100%',
    },

    dropdownBtnStyle: {
        backgroundColor: "#00000000",
        borderRadius: 8,
        marginBottom: 8,
        textAlign: 'center',
      },

      dropdownBtnTxtStyle: { 
        color: "black", 
        textAlign: "center",
    },

    dropdown:{
        position: 'absolute'
    }
    
})