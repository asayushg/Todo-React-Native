import React from "react";
import { AsyncStorage } from "react-native";

function SaveTodoList(notesList){

    AsyncStorage.setItem("TODO", JSON.stringify(notesList));

}

export default SaveTodoList;