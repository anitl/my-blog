import React from 'react';
import { StyleSheet,  View, TouchableOpacity} from 'react-native';
import {AppText} from './ui/AppText'

export const Todo = ({todo, onRemove, onOpen})  => {
   const onLongPressHandler = () => {
      onRemove(todo.id)
   }


	return (
       <TouchableOpacity 
       activeOpacity={0.5}
       // onPress={() => console.log("Pressed", todo.id)}
       onPress={ () => onOpen( todo.id)}
       // onLongPress={() => onRemove.(todo.id)}
       // onLongPress={onLongPressHandler}
       onLongPress={onRemove.bind(null, todo.id)}
       >
        <View style={styles.todo}>
      <AppText> {todo.title} </AppText>
      </View>
       </TouchableOpacity>
       

		        

		)
}

const styles = StyleSheet.create({
todo: {
   flexDirection: "row",
   alignItems: "center",
   padding: 15,
   borderWidth: 1,
   borderColor: "#EEE",
   borderRadius: 5, 
   marginBottom: 5,

}, 


});